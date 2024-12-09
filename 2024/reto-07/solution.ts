function fixPackages(packages: string): string {
  while (packages.includes('(') && packages.includes(')')) {
    const openParenthesis = packages.lastIndexOf('(');
    const closeParenthesis = packages.indexOf(')', openParenthesis);

    const before = packages.slice(0, openParenthesis);
    const after = packages.slice(closeParenthesis + 1);
    const middle = packages.slice(openParenthesis + 1, closeParenthesis);

    packages = before + middle.split('').reverse().join('') + after;
  }

  return packages;
}

export { fixPackages };
