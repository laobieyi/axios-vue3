import { clearStore,getStore, setStore } from '@/utils/storage';

export const TokenKey = 'Access-Token';
export const UserKey = 'auth_user';

export function getToken() {
  return getStore(TokenKey);
}

export function setToken(token) {
  // key, token, timeout = 86400s
  return setStore(TokenKey, token, 86400);
}

export function getUser() {
  return getStore.getItem(UserKey);
}

export function setUser(token) {
  return setStore(UserKey, token, 86400);
}
export function removeToken() {
  return clearStore(TokenKey);
}
