export function maxGifts(houses: number[]): number {
  let maxGifts = 0;
  let previousHouseGifts = 0;
  let currentHouseGifts = 0;

  for (const houseGifts of houses) {
    currentHouseGifts = Math.max(previousHouseGifts, maxGifts + houseGifts);
    maxGifts = previousHouseGifts;
    previousHouseGifts = currentHouseGifts;
  }

  return currentHouseGifts;
}
