// usserObj.js
import { fetchUser } from "./fetchUser";

export function updateUsuario(newUsuario) {
  USUARIO.user = newUsuario.user;
  USUARIO.pass = newUsuario.pass;
}

export let isFetching = false; // Mover isFetching aquí para que sea accesible en fetchUser

export let USUARIO = {
  user: "",
  pass: "",
};

export async function initUser() {
  if (!isFetching) {
    isFetching = true;
    try {
      const user = await fetchUser();
      updateUsuario(user);
    } catch (err) {
      console.error(`Error al inicializar usuario: ${err.message}`);
    } finally {
      isFetching = false;
    }
  }
}
