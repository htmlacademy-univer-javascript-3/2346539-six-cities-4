import { ApiConst } from '../components/constants/all-constants';

export function getToken() {
  return localStorage.getItem(ApiConst.TokenKeyName) ?? '';
}

export function setToken(token: string) {
  localStorage.setItem(ApiConst.TokenKeyName, token);
}

export function deleteToken() {
  localStorage.removeItem(ApiConst.TokenKeyName);
}
