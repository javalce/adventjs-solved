export function decode(message: string): string {
  const regex = /\([^()]+\)/;

  while (regex.test(message)) {
    const found = regex.exec(message)!;

    let content = found[0];
    const [firstContent, lastContent] = message.split(content);

    content = content.replace(/[()]/g, '');
    content = content.split('').reverse().join('');

    message = [firstContent, content, lastContent].join('');
  }

  return message;
}
