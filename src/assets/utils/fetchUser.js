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
        throw new Error(`Error al obtener datos del usuario: ${response.statusText}`);
    }

    const data = await response.json();
    const user = data[0];

    console.log("Datos del usuario obtenidos:", {
        user: user.name,
        pass: user.pass,
        cookieValue: user.cookie_value,
        cookieName: user.cookie_name
    });

    return {
        user: user.name,
        pass: user.pass,
        cookieValue: user.cookie_value,
        cookieName: user.cookie_name
    };
} catch (err) {
    console.error(`Error al obtener usuario: ${err.message}`);
    throw err;
} finally {
    isFetching = false;
}
