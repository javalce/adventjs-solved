interface TreeNode {
  value: string;
  left?: TreeNode;
  right?: TreeNode;
}

function isTreesSynchronized(
  tree1: TreeNode | undefined,
  tree2: TreeNode | undefined,
): [boolean, string] {
  if (tree1 === undefined && tree2 === undefined) return [true, ''];

  if (tree1 !== undefined && tree2 !== undefined && tree1.value === tree2.value) {
    const [leftSync] = isTreesSynchronized(tree1.left, tree2.right);
    const [rightSync] = isTreesSynchronized(tree1.right, tree2.left);

    if (leftSync && rightSync) return [true, tree1.value];
  }

  return [false, tree1?.value ?? ''];
}

export { isTreesSynchronized };
