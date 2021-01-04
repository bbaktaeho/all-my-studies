function solution(encrypted_text, key, rotation) {
  const zNum = 'z'.charCodeAt();
  const aNum = 'a'.charCodeAt();
  const keyNumList = key.split('').map(e => e.charCodeAt() - aNum + 1);
  const text = encrypted_text.split('').map(e => e.charCodeAt());
  const result = [];
  if (rotation > 0) while (rotation--) text.push(text.shift());
  else while (rotation++) text.unshift(text.pop());
  for (const i in text) {
    let encryption = text[i] - keyNumList[i];
    encryption = encryption < aNum ? encryption - aNum + zNum + 1 : encryption;
    result.push(String.fromCharCode(encryption));
  }
  return result.join('');
}
