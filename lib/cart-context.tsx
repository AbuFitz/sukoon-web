"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { products } from "@/lib/products";

type CartItem = { slug: string; qty: number };

type CartContextValue = {
  items: CartItem[];
  addToBag: (slug: string, qty?: number) => void;
  removeItem: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "sukoon-cart";

function parsePrice(price: string): number {
  return Number(price.replace(/[^0-9.]/g, "")) || 0;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addToBag = useCallback((slug: string, qty: number = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.slug === slug);
      if (existing) {
        return prev.map(i => i.slug === slug ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, { slug, qty }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems(prev => prev.filter(i => i.slug !== slug));
  }, []);

  const updateQty = useCallback((slug: string, qty: number) => {
    setItems(prev => {
      if (qty <= 0) return prev.filter(i => i.slug !== slug);
      return prev.map(i => i.slug === slug ? { ...i, qty } : i);
    });
  }, []);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);

  const subtotal = useMemo(() => {
    return items.reduce((sum, i) => {
      const product = products.find(p => p.slug === i.slug);
      return sum + (product ? parsePrice(product.price) * i.qty : 0);
    }, 0);
  }, [items]);

  const value = useMemo(() => ({ items, addToBag, removeItem, updateQty, count, subtotal }), [items, addToBag, removeItem, updateQty, count, subtotal]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
