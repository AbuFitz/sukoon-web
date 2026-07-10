"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import {
  cartCreate, cartLinesAdd, cartLinesRemove, cartLinesUpdate, getCart,
  type ShopifyCart,
} from "@/lib/shopify";

type CartContextValue = {
  cart: ShopifyCart | null;
  count: number;
  loading: boolean;
  addToCart: (variantId: string, qty?: number) => Promise<void>;
  removeFromCart: (lineId: string) => Promise<void>;
  updateQty: (lineId: string, qty: number) => Promise<void>;
  checkoutUrl: string | null;
};

const CartContext = createContext<CartContextValue | null>(null);
const CART_ID_KEY = "sukoon-shopify-cart-id";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShopifyCart | null>(null);
  const [loading, setLoading] = useState(false);

  // Rehydrate existing cart on mount
  useEffect(() => {
    const storedId = localStorage.getItem(CART_ID_KEY);
    if (!storedId) return;
    getCart(storedId).then(c => {
      if (c) setCart(c);
      else localStorage.removeItem(CART_ID_KEY); // cart expired
    }).catch(() => localStorage.removeItem(CART_ID_KEY));
  }, []);

  const addToCart = useCallback(async (variantId: string, qty = 1) => {
    setLoading(true);
    try {
      const cartId = localStorage.getItem(CART_ID_KEY);
      let updated: ShopifyCart;
      if (cartId) {
        // Check if variant already in cart → update qty instead
        const existing = cart?.lines.nodes.find(l => l.merchandise.id === variantId);
        if (existing) {
          updated = await cartLinesUpdate(cartId, existing.id, existing.quantity + qty);
        } else {
          updated = await cartLinesAdd(cartId, variantId, qty);
        }
      } else {
        updated = await cartCreate(variantId, qty);
        localStorage.setItem(CART_ID_KEY, updated.id);
      }
      setCart(updated);
    } finally {
      setLoading(false);
    }
  }, [cart]);

  const removeFromCart = useCallback(async (lineId: string) => {
    const cartId = localStorage.getItem(CART_ID_KEY);
    if (!cartId) return;
    setLoading(true);
    try {
      const updated = await cartLinesRemove(cartId, lineId);
      setCart(updated);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateQty = useCallback(async (lineId: string, qty: number) => {
    const cartId = localStorage.getItem(CART_ID_KEY);
    if (!cartId) return;
    setLoading(true);
    try {
      if (qty <= 0) {
        const updated = await cartLinesRemove(cartId, lineId);
        setCart(updated);
      } else {
        const updated = await cartLinesUpdate(cartId, lineId, qty);
        setCart(updated);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const count = useMemo(() => cart?.totalQuantity ?? 0, [cart]);
  const checkoutUrl = cart?.checkoutUrl ?? null;

  const value = useMemo(() => ({
    cart, count, loading, addToCart, removeFromCart, updateQty, checkoutUrl,
  }), [cart, count, loading, addToCart, removeFromCart, updateQty, checkoutUrl]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
