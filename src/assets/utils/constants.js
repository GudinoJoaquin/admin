export const API_KEY =
  "CBuW$66aWU!MbZ41h^JH^nLAw%^^sh%JfJmp82#ud*YX91Fx5N6%t6%!udFF"; //"Llave" de acceso a la API
let user = null;
const isFetching = { current: false };

// Define USUARIO inicialmente con valores vacíos
export let USUARIO = {
  user: "",
  pass: "",
};

//Consigue el usuario de la API
async function fetchUser() {
  if (!isFetching.current) {
    isFetching.current = true;
    try {
      const response = await fetch("https://anuncios.vercel.app/verificarUsuario", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": API_KEY, //Aca se envia la API_KEY
        },
      });
      if (!response.ok) {
        throw new Error("Error fetcheando data");
      }
      const data = await response.json();
      user = data[0]; // Asumiendo que data es un array y queremos el primer elemento
      console.log(data);

      // Asignar valores a USUARIO
      USUARIO.user = user.name;
      USUARIO.pass = user.pass;
    } catch (err) {
      console.error(`Error: ${err}`);
    } finally {
      isFetching.current = false;
    }
  }
}

fetchUser();

export function updateUsuario(newUsuario) {
  USUARIO.user = newUsuario.user;
  USUARIO.pass = newUsuario.pass;
  console.log("USUARIO actualizado dentro de updateUsuario:", USUARIO); // Para depuración
}

export const RUTAS = { //Rutas de todas las paginas
  home: "/",
  crear: "/crear",
  enviar: "https://anuncios.vercel.app/admin/enviar-anuncio",
  enviarEditar: "https://anuncios.vercel.app/admin/editar-anuncio",
  editar: "/editar",
  eliminar: "https://anuncios.vercel.app/eliminar-anuncio?id=",
  login: "/login",
  configurar: "/configurar",
};

export const COOKIE_INFO = { //Nombre y valor de la cookie (tienen 720 caracteres)
  name: "SVZHJm6L6RB5t6VeLESJHv33qYPY1XXfPrpU6bavKyBjPvU5EXKyp3pxSg4vCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgDqW5Fu2RmcgjjZXsQcds678ZbBdK3jNe5gzNS7k3KYxpRZQGeDyG7N3xT13ZTDZCDxfEsGcRLUbrNFLBQAwmzz71T1M8QzkPy4H4Uw4PYfXNv7f4XyfvEZu967BaXqqKQzfzZ6Hsu6qMgcGHqvDrQhgQ173CSBaafj8MahNd327tbqyeQrjgzzjwpanMn2KKqQ1QQY1u4cDRMfdQp4WqZP53YE8CZBrZ9rEJzVeyntCFEsWVmFNYpkwmCWT1brRWF1QER43yyQCQqhHGWFLZEdGGya5SNNP6e4QUCFdcPPnd7GfKdK1hjtvTe418b4ktc8yEfuUmCsNkFkQdb1mqk5jTNwVTcQhmVVvgjU48tQWQB7RKrQBWGCBxjkT2zqN93gcvTeDuGSLe1BszNMSyDFETQmpSBhSzUUp2DyLth1GzTKw4avjTAkavWbUR2yCUkFTN1LtgWWNaxj685QHwxHTDJfjB7KFTsRny8CAjkyxqLCLTegrwXQC7vMENFQFZ2UjGBYneFaRXHeCgA7KbE3k2LTUf",
  value:
    "eEz4q8VQ7PpDXaJDutEwVyN52KUEXcfKJ2A4wUBNJp6PgBkSF2cXpJ3tC8uz9fXG96rV8mTfw8dCBaJ5frMT3xE95RCWhaMUPBnPjs6V9ST3hxuTkYM66Njt8UucCvY6G7CJNafnJbnNBDRxRFGpgzyG41cmdu53qDGtjeh8yVQcRtFXcbQUmGcaaRJqtH1AcqbbBfqxCapxQsTtK5y5PEWqrbpZfF6s1H2uyPBjnT1ztXRE3g2PLVxVvMmRZeD9REevcPEeM3xqdD54GupzMWW5sw3naVWtaJVW3ZZGeaRsG74HJqkbmj1MDwnmN2jDJmJSECfmNwyxutDZ9X5ppjkynktWNnXRFmtCM9XcxA7gShBpXRMX1jmKA6JwCjK2V9yT2WwEmVVbffbB2NQuKEq7U2L8HNEn75eyxA7gShBpXRMX1jmKA6JwCjK2V9yT2WwEmVVbffbB2NQuKEq7U2L8HNEn75eywpHuzJc4sxbdfFExDAT1byu1SDhtyevspeZg8yHpyCPtebCRtgJFZL2W5e1xB7K7wQqEX6k7eKpPjZd29wShYT6jvkJDC4bPBP69Vkg65KZfNuD2tms71XNeu2LmePBqGPPBm8zCtLzkWTK3Jkj8W7VSEbn2enJRS2qNAYjhxWZrHyVM6fSVpTCWjWfybGmqkrcX3L8HtEk5V3SaSYxJK372VVJWcDQmafBtat5W6V5Pdb91",
};
