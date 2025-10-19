import { Transaction } from '@mysten/sui/transactions';

export const createArena = (packageId: string, heroId: string) => {
  const tx = new Transaction();

  // TODO: Add moveCall to create a battle place
  // Function: `${packageId}::arena::create_arena`
  tx.moveCall({
    target: `${packageId}::arena::create_arena`,
    arguments: [
      tx.object(heroId), // Hint: Use tx.object() for the hero object
    ],
  });

  return tx;
};
