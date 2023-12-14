export function decode(message: string): string {
  const regex = /\([^()]+\)/;

  const reverseString = (s: string): string => s.split('').reverse().join('');

  const getContentInParenthesis = (word: string): string => {
    const found = regex.exec(word);

    if (found === null) return word;

    let content = found[0];
    const [firstContent, lastContent] = word.split(content);

    content = content.replace('(', '');
    content = content.replace(')', '');
    content = reverseString(content);

    const result = [firstContent, content, lastContent].join('');

    return getContentInParenthesis(result);
  };

  return getContentInParenthesis(message);
}
