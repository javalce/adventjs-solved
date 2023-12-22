export function organizeGifts(gifts: string): string {
  let result = '';

  const GIFTS_PER_BOX = 10;
  const GIFTS_PER_PALLET = GIFTS_PER_BOX * 5;

  // Generamos un array separando cada tipo de regalo y,
  // para cada uno el número de regalos y la letra
  const giftArray = gifts.match(/\d+[a-z]/g)!.map((value) => {
    const num = value.slice(0, -1);
    const letter = value.at(-1)!;

    return {
      num: Number(num),
      letter,
    };
  });

  for (const { num, letter } of giftArray) {
    // Número de pallets
    const numPallets = Math.floor(num / GIFTS_PER_PALLET);

    // Número de cajas
    const numBoxes = Math.floor((num % GIFTS_PER_PALLET) / GIFTS_PER_BOX);

    // Resto de regaos que van en una bolsa
    const numInBag = num % GIFTS_PER_BOX;

    const pallets = `[${letter}]`.repeat(numPallets);
    const boxes = `{${letter}}`.repeat(numBoxes);

    result += pallets + boxes;

    // Añadimos las bolsas si hay
    if (numInBag > 0) {
      const bag = `(${letter.repeat(numInBag)})`;

      result += bag;
    }
  }

  return result;
}
