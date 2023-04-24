export default function caesarCipher(plainText, key) {
  let cipherText = '';
  const lowerRe = /[a-z]/;
  const upperRe = /[A-Z]/;
  for (let i = 0; i < plainText.length; i++) {
    if (lowerRe.test(plainText.charAt(i)))
      cipherText += String.fromCharCode(
        ((plainText.charCodeAt(i) - 97 + key) % 26) + 97
      );
    else if (upperRe.test(plainText.charAt(i)))
      cipherText += String.fromCharCode(
        ((plainText.charCodeAt(i) - 65 + key) % 26) + 65
      );
    else cipherText += plainText.charAt(i);
  }
  return cipherText;
}
