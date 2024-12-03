type Inventory = { name: string; quantity: number; category: string }[];

function organizeInventory(inventory: Inventory): object {
  const result: Record<string, Record<string, number>> = {};

  for (const { name, quantity, category } of inventory) {
    result[category] = result[category] ?? {};
    result[category][name] = (result[category][name] ?? 0) + quantity;
  }

  return result;
}

export { organizeInventory };
