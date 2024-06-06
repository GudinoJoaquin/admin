// Función para establecer una cookie en el navegador
export function setCookie(name, value, hours) {
  // Se crea un objeto de fecha para calcular la fecha de expiración
  const expiration = new Date();
  expiration.setTime(expiration.getTime() + hours * 60 * 60 * 1000); // Se suma la cantidad de horas especificada

  // Se establece la cookie en el navegador con el nombre, valor y fecha de expiración especificados
  document.cookie = `${name}=${value}; expires=${expiration.toUTCString()}; path=/`;
}

// Función para obtener el valor de una cookie del navegador
export function getCookie(name) {
  // Se crea una cadena que contiene el nombre de la cookie seguido de '=' para buscar en las cookies
  const cookieName = `${name}=`;
  
  // Se decodifican todas las cookies almacenadas en el navegador
  const decodedCookie = decodeURIComponent(document.cookie);
  
  // Se divide la cadena de cookies decodificada en un array, separado por punto y coma (';')
  const cookieArray = decodedCookie.split(";");

  // Se itera sobre el array de cookies
  for (let i = 0; i < cookieArray.length; i++) {
    // Se elimina cualquier espacio en blanco alrededor de la cookie actual
    let cookie = cookieArray[i].trim();
    
    // Si la cookie actual comienza con el nombre de la cookie buscada, se devuelve su valor
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  // Si no se encuentra la cookie, se devuelve una cadena vacía
  return "";
}

// Función para eliminar una cookie del navegador
export function deleteCookie(name) {
  // Se crea un objeto de fecha en el pasado para que la cookie expire
  const expiration = new Date(0);
  
  // Se establece la fecha de expiración de la cookie en el pasado, lo que hace que el navegador la elimine automáticamente
  document.cookie = `${name}=; expires=${expiration.toUTCString()}; path=/`;
}
