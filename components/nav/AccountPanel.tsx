"use client";

import { Panel } from "./Panel";
import { AccountForm } from "./AccountForm";

export function AccountPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Panel open={open} onClose={onClose} title="Account">
      <AccountForm />
    </Panel>
  );
}
