import { Transaction } from '@mysten/sui/transactions';

export const transferAdminCap = (adminCapId: string, to: string) => {
  const tx = new Transaction();

  // TODO: Transfer admin capability to another address
  // Use tx.transferObjects() method
  tx.transferObjects(
    [tx.object(adminCapId)], // Hint: Use tx.object() to reference the admin cap
    to // Recipient address
  );

  return tx;
};
