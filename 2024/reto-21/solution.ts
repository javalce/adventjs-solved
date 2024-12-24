interface Node {
  value: string;
  left: Node | null;
  right: Node | null;
}

function treeHeight(tree: Node | null): number {
  if (tree === null) return 0;

  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

export { treeHeight };
