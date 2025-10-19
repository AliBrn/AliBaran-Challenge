import { Transaction } from '@mysten/sui/transactions';

// 1 SUI = 1,000,000,000 MIST
const SUI_TO_MIST = 1_000_000_000;

export const buyHero = (
  packageId: string,
  listHeroId: string,
  priceInSui: string
) => {
  const tx = new Transaction();

  // TODO: Convert SUI to MIST
  const priceInMist = BigInt(parseFloat(priceInSui) * SUI_TO_MIST);

  // TODO: Split coin for exact payment
  // Hint: Use tx.splitCoins(tx.gas, [priceInMist])
  const [paymentCoin] = tx.splitCoins(tx.gas, [priceInMist]);

  // TODO: Add moveCall to buy a hero
  // Function: `${packageId}::marketplace::buy_hero`
  tx.moveCall({
    target: `${packageId}::marketplace::buy_hero`,
    arguments: [
      tx.object(listHeroId), // Hint: Use tx.object() for the ListHero object
      paymentCoin, // Hint: Use the paymentCoin
    ],
  });

  return tx;
};