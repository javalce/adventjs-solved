export function transformTree(tree: (number | null)[]): object | null {
  interface TreeNode {
    value: number | null;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  if (tree.length === 0) {
    return null;
  }

  const newTree: TreeNode = {
    value: tree[0],
    left: null,
    right: null,
  };
  const queue: (TreeNode | null)[] = [newTree];
  let i = 1;

  while (i < tree.length) {
    const curr = queue.shift() as TreeNode | null;

    if (i < tree.length) {
      const value = tree[i++];

      if (curr !== null) {
        if (value === null) {
          curr.left = null;
        } else {
          curr.left = {
            value,
            left: null,
            right: null,
          };
        }
        queue.push(curr.left);
      }
    }

    if (i < tree.length) {
      const value = tree[i++];

      if (curr !== null) {
        if (value === null) {
          curr.right = null;
        } else {
          curr.right = {
            value,
            left: null,
            right: null,
          };
        }
        queue.push(curr.right);
      }
    }
  }

  return newTree;
}
