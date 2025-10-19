import { Transaction } from '@mysten/sui/transactions';

// 1 SUI = 1,000,000,000 MIST
const SUI_TO_MIST = 1_000_000_000;

export const changePrice = (
  packageId: string,
  listHeroId: string,
  newPriceInSui: string,
  adminCapId: string
) => {
  const tx = new Transaction();

  // TODO: Convert SUI to MIST
  const newPriceInMist = BigInt(parseFloat(newPriceInSui) * SUI_TO_MIST);

  // TODO: Add moveCall to change hero price (Admin only)
  // Function: `${packageId}::marketplace::change_the_price`
  tx.moveCall({
    target: `${packageId}::marketplace::change_the_price`,
    arguments: [
      tx.object(adminCapId), // Hint: Use tx.object() for objects
      tx.object(listHeroId), // Hint: Use tx.object() for objects
      tx.pure.u64(newPriceInMist), // Hint: Use tx.pure.u64() for the new price
    ],
  });

  return tx;
};
