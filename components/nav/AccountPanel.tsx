"use client";

import { Panel } from "./Panel";
import { AccountForm } from "./AccountForm";
import { AccountSignedIn } from "./AccountSignedIn";
import { useCustomer } from "@/lib/customer-context";

export function AccountPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { customer } = useCustomer();
  return (
    <Panel open={open} onClose={onClose} title="">
      {customer ? <AccountSignedIn /> : <AccountForm />}
    </Panel>
  );
}
