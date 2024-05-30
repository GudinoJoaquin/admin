export function setCookie(name, value, hours) {
  const expiration = new Date();
  expiration.setTime(expiration.getTime() + hours * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expiration.toUTCString()}; path=/`;
}

export function getCookie(name) {
  const cookieName = `${name}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

export function deleteCookie(name) {
  const expiration = new Date(0); // Fecha en el pasado
  document.cookie = `${name}=; expires=${expiration.toUTCString()}; path=/`;
}
