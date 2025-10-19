import { Transaction } from '@mysten/sui/transactions';

export const battle = (packageId: string, heroId: string, arenaId: string) => {
  const tx = new Transaction();

  // TODO: Add moveCall to start a battle
  // Function: `${packageId}::arena::battle`
  tx.moveCall({
    target: `${packageId}::arena::battle`,
    arguments: [
      tx.object(heroId), // Hint: Use tx.object() for hero
      tx.object(arenaId), // Hint: Use tx.object() for battle place (arena)
    ],
  });

  return tx;
};