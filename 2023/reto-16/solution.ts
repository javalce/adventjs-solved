export function transformTree(tree: (number | null)[]): object | null {
  const root = tree.shift();

  if (root === undefined || root === null) {
    return null;
  }

  const L: (number | null)[] = [];
  const R: (number | null)[] = [];
  let n = 1;
  let i = 0;
  let inL = true;
  let c = 0;

  while (i < tree.length) {
    if (inL) {
      L.push(tree[i]);
    } else {
      R.push(tree[i]);
    }
    c++;
    i++;
    if (c === n) {
      c = 0;
      inL = !inL;
      if (inL) n *= 2;
    }
  }

  return {
    value: root,
    left: transformTree(L),
    right: transformTree(R),
  };
}
