export function decode(message: string): string {
  const hasParenthesis = (word: string) => /[\(\)]/.test(word);
  const getContentInParenthesis = (word: string) => {
    const start = word.lastIndexOf('(');
    const end = word.indexOf(')');

    const firstContent = word.slice(0, start);
    const lastContent = word.slice(end + 1);
    let content = word.slice(start + 1, end);

    const reversedContent = content.split('').reverse().join('');
    return [firstContent, reversedContent, lastContent].join('');
  };

  const messages = message.split(' ');
  let i = 0;

  while (i < messages.length) {
    if (hasParenthesis(messages[i])) {
      messages[i] = getContentInParenthesis(messages[i]);
    } else {
      i++;
    }
  }

  return messages.join(' ');
}
