import { Transaction } from '@mysten/sui/transactions';

export const delist = (
  packageId: string,
  listHeroId: string,
  adminCapId: string
) => {
  const tx = new Transaction();

  // TODO: Add moveCall to delist a hero (Admin only)
  // Function: `${packageId}::marketplace::delist`
  tx.moveCall({
    target: `${packageId}::marketplace::delist`,
    arguments: [
      tx.object(adminCapId), // Hint: Use tx.object() for admin capability
      tx.object(listHeroId), // Hint: Use tx.object() for the ListHero object
    ],
  });

  return tx;
};
