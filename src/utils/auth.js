import Cookies from 'js-cookie'

const TokenKey = 'user_token'

export function getToken() {
  const token = Cookies.get(TokenKey)
  if (token === 'undefined') {
    return null
  }
  return token
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
