"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import {
  customerSignIn, customerSignUp, customerSignOut, getCustomer,
  type ShopifyCustomer,
} from "@/lib/shopify";

type CustomerContextValue = {
  customer: ShopifyCustomer | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const CustomerContext = createContext<CustomerContextValue | null>(null);
const TOKEN_KEY = "sukoon-shopify-customer-token";

export function CustomerProvider({ children }: { children: React.ReactNode }) {
  const [customer, setCustomer] = useState<ShopifyCustomer | null>(null);
  const [loading, setLoading] = useState(false);

  // Rehydrate an existing session on mount
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;
    getCustomer(token).then(c => {
      if (c) setCustomer(c);
      else localStorage.removeItem(TOKEN_KEY); // token expired/invalid
    }).catch(() => localStorage.removeItem(TOKEN_KEY));
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    setLoading(true);
    try {
      const { accessToken } = await customerSignIn(email, password);
      localStorage.setItem(TOKEN_KEY, accessToken);
      const c = await getCustomer(accessToken);
      setCustomer(c);
    } finally {
      setLoading(false);
    }
  }, []);

  const signUp = useCallback(async (email: string, password: string, firstName: string, lastName: string) => {
    setLoading(true);
    try {
      await customerSignUp(email, password, firstName, lastName);
      const { accessToken } = await customerSignIn(email, password);
      localStorage.setItem(TOKEN_KEY, accessToken);
      const c = await getCustomer(accessToken);
      setCustomer(c);
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    setLoading(true);
    try {
      if (token) await customerSignOut(token).catch(() => {});
      localStorage.removeItem(TOKEN_KEY);
      setCustomer(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(() => ({
    customer, loading, signIn, signUp, signOut,
  }), [customer, loading, signIn, signUp, signOut]);

  return <CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>;
}

export function useCustomer() {
  const ctx = useContext(CustomerContext);
  if (!ctx) throw new Error("useCustomer must be used within CustomerProvider");
  return ctx;
}
