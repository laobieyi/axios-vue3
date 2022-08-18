/**
 * Set storage
 *
 * @param key
 * @param value
 * @param maxAge
 */
export const setStore = (key, value, maxAge = null) => {
  let content = value;
  if (typeof value !== 'string') {
    content = JSON.stringify(value);
  }

  const storage = window.localStorage;

  storage.setItem(key, content);
  if (maxAge && !isNaN(parseInt(maxAge, 10))) {
    let time = new Date().getTime() / 1000;
    const timeout = parseInt(time, 10);
    storage.setItem(`${key}_expire`, timeout + maxAge);
  }
};

/**
 * Get storage
 *
 * @param key
 * @returns {*}
 */
export const getStore = (key) => {
  // if (!global.window || !name) {
  //   return;
  // }

  const value = window.localStorage.getItem(key);
  const _expire = window.localStorage.getItem(`${key}_expire`);

  if (_expire) {
    let time = new Date().getTime() / 1000;
    const now = parseInt(time, 10);
    if (now > _expire) {
      return;
    }
  }

  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

/**
 * Clear storage
 *
 * @param key
 */
export const clearStore = (key) => {
  window.localStorage.removeItem(key);
  window.localStorage.removeItem(`${key}_expire`);
};

/**
 * Clear all storage
 */
export const clearAll = () => {
  window.localStorage.clear();
};
