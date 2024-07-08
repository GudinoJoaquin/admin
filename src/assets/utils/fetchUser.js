import { SERVER_KEY } from "../../config/serverKey";

let isFetching = false;

export async function fetchUser() {
    if (!isFetching) {
        isFetching = true;
        try {
            const response = await fetch(
                "https://anuncios.vercel.app/verificarUsuario",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": SERVER_KEY,
                    },
                }
            );

            if (!response.ok) {
                throw new Error(Error al obtener datos del usuario: ${response.statusText});
            }

            const data = await response.json();
            const user = data[0];

            return {
                user: user.name,
                pass: user.pass,
                cookieValue: user.cookie_value // Extrae el valor de la cookie
            };
        } catch (err) {
            console.error(Error al obtener usuario: ${err.message});
            throw err; // Re-lanzar el error para que se maneje externamente si es necesario
        } finally {
            isFetching = false;
        }
    }
