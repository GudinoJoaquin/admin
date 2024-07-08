// export let COOKIE_INFO = {
//  name: "SVZHJm6L6RB5t6VeLESJHv33qYPY1XXfPrpU6bavKyBjPvU5EXKyp3pxSg4vCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgDqW5Fu2RmcgjjZXsQcds678ZbBdK3jNe5gzNS7k3KYxpRZQGeDyG7N3xT13ZTDZCDxfEsGcRLUbrNFLBQAwmzz71T1M8QzkPy4H4Uw4PYfXNv7f4XyfvEZu967BaXqqKQzfzZ6Hsu6qMgcGHqvDrQhgQ173CSBaafj8MahNd327tbqyeQrjgzzjwpanMn2KKqQ1QQY1u4cDRMfdQp4WqZP53YE8CZBrZ9rEJzVeyntCFEsWVmFNYpkwmCWT1brRWF1QER43yyQCQqhHGWFLZEdGGya5SNNP6e4QUCFdcPPnd7GfKdK1hjtvTe418b4ktc8yEfuUmCsNkFkQdb1mqk5jTNwVTcQhmVVvgjU48tQWQB7RKrQBWGCBxjkT2zqN93gcvTeDuGSLe1BszNMSyDFETQmpSBhSzUUp2DyLth1GzTKw4avjTAkavWbUR2yCUkFTN1LtgWWNaxj685QHwxHTDJfjB7KFTsRny8CAjkyxqLCLTegrwXQC7vMENFQFZ2UjGBYneFaRXHeCgA7KbE3k2LTUf",
//  value: "eEz4q8VQ7PpDXaJDutEwVyN52KUEXcfKJ2A4wUBNJp6PgBkSF2cXpJ3tC8uz9fXG96rV8mTfw8dCBaJ5frMT3xE95RCWhaMUPBnPjs6V9ST3hxuTkYM66Njt8UucCvY6G7CJNafnJbnNBDRxRFGpgzyG41cmdu53qDGtjeh8yVQcRtFXcbQUmGcaaRJqtH1AcqbbBfqxCapxQsTtK5y5PEWqrbpZfF6s1H2uyPBjnT1ztXRE3g2PLVxVvMmRZeD9REevcPEeM3xqdD54GupzMWW5sw3naVWtaJVW3ZZGeaRsG74HJqkbmj1MDwnmN2jDJmJSECfmNwyxutDZ9X5ppjkynktWNnXRFmtCM9XcxA7gShBpXRMX1jmKA6JwCjK2V9yT2WwEmVVbffbB2NQuKEq7U2L8HNEn75eywpHuzJc4sxbdfFExDAT1byu1SDhtyevspeZg8yHpyCPtebCRtgJFZL2W5e1xB7K7wQqEX6k7eKpPjZd29wShYT6jvkJDC4bPBP69Vkg65KZfNuD2tms71XNeu2LmePBqGPPBm8zCtLzkWTK3Jkj8W7VSEbn2enJRS2qNAYjhxWZrHyVM6fSVpTCWjWfybGmqkrcX3L8HtEk5V3SaSYxJK372VVJWcDQmafBtat5W6V5Pdb91"
//};

const API_KEY = "CBuW$66aWU!MbZ41h^JH^nLAw%^^sh%JfJmp82#ud*YX91Fx5N6%t6%!udFF";
const url = "https://anuncios.vercel.app/verificarUsuario";

let COOKIE_INFO = {
  name: "SVZHJm6L6RB5t6VeLESJHv33qYPY1XXfPrpU6bavKyBjPvU5EXKyp3pxSg4vCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgDqW5Fu2RmcgjjZXsQcds678ZbBdK3jNe5gzNS7k3KYxpRZQGeDyG7N3xT13ZTDZCDxfEsGcRLUbrNFLBQAwmzz71T1M8QzkPy4H4Uw4PYfXNv7f4XyfvEZu967BaXqqKQzfzZ6Hsu6qMgcGHqvDrQhgQ173CSBaafj8MahNd327tbqyeQrjgzzjwpanMn2KKqQ1QQY1u4cDRMfdQp4WqZP53YE8CZBrZ9rEJzVeyntCFEsWVmFNYpkwmCWT1brRWF1QER43yyQCQqhHGWFLZEdGGya5SNNP6e4QUCFdcPPnd7GfKdK1hjtvTe418b4ktc8yEfuUmCsNkFkQdb1mqk5jTNwVTcQhmVVvgjU48tQWQB7RKrQBWGCBxjkT2zqN93gcvTeDuGSLe1BszNMSyDFETQmpSBhSzUUp2DyLth1GzTKw4avjTAkavWbUR2yCUkFTN1LtgWWNaxj685QHwxHTDJfjB7KFTsRny8CAjkyxqLCLTegrwXQC7vMENFQFZ2UjGBYneFaRXHeCgA7KbE3k2LTUf",
  value: "initial_value" // Valor inicial no vacío
};

async function fetchCookieValue() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data && data.length > 0 && data[0].cookie_value) {
      COOKIE_INFO.value = data[0].cookie_value;
      console.log("Updated COOKIE_INFO:", COOKIE_INFO);
    } else {
      console.error("Unexpected response structure:", data);
    }
  } catch (error) {
    console.error("Error fetching cookie value:", error);
  }
}

// Llama a la función para hacer el fetch y exporta COOKIE_INFO después de que se haya actualizado
fetchCookieValue().then(() => {
  // Aquí puedes hacer cualquier cosa que necesites con COOKIE_INFO
  console.log("COOKIE_INFO ready to be used:", COOKIE_INFO);
});

export { COOKIE_INFO };

