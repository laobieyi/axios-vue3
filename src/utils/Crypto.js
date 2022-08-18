import CryptoJS from 'crypto-js';
const cryptoKey = process.env.VUE_APP_CRYPT_KEY;

/**
 * 使用 Crypto-js 加密
 * @param {String} value 加密前的内容
 * @returns 加密后的字符串
 */

export const encryptECB = (value) => {
  let result = '';
  let key = CryptoJS.enc.Utf8.parse(cryptoKey);
  let message = CryptoJS.enc.Utf8.parse(value);
  result = CryptoJS.AES.encrypt(message, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return result.toString();
};
