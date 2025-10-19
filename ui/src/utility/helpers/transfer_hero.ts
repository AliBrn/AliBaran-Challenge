import { Transaction } from '@mysten/sui/transactions';

export const transferHero = (heroId: string, to: string) => {
  const tx = new Transaction();

  // TODO: Transfer hero to another address
  // Use tx.transferObjects() method
  tx.transferObjects(
    [tx.object(heroId)], // Hint: Use tx.object() for object IDs
    to // Hint: Use "to" for the address
  );

  return tx;
};