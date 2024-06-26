export const COOKIE_INFO = {
  //Nombre y valor de la cookie (tienen 720 caracteres)
async function fetchusser() {
  const url = "https://anuncios.vercel.app/verificarUsuario";
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

let COOKIE_INFO = {
  name: "SVZHJm6L6RB5t6VeLESJHv33qYPY1XXfPrpU6bavKyBjPvU5EXKyp3pxSg4vCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgCgmUuZ3Jmw5rSey2sN7T62fcLMXZz5EJ1KVKv1wwpm6cCdBBN8auYhKeL9pgDqW5Fu2RmcgjjZXsQcds678ZbBdK3jNe5gzNS7k3KYxpRZQGeDyG7N3xT13ZTDZCDxfEsGcRLUbrNFLBQAwmzz71T1M8QzkPy4H4Uw4PYfXNv7f4XyfvEZu967BaXqqKQzfzZ6Hsu6qMgcGHqvDrQhgQ173CSBaafj8MahNd327tbqyeQrjgzzjwpanMn2KKqQ1QQY1u4cDRMfdQp4WqZP53YE8CZBrZ9rEJzVeyntCFEsWVmFNYpkwmCWT1brRWF1QER43yyQCQqhHGWFLZEdGGya5SNNP6e4QUCFdcPPnd7GfKdK1hjtvTe418b4ktc8yEfuUmCsNkFkQdb1mqk5jTNwVTcQhmVVvgjU48tQWQB7RKrQBWGCBxjkT2zqN93gcvTeDuGSLe1BszNMSyDFETQmpSBhSzUUp2DyLth1GzTKw4avjTAkavWbUR2yCUkFTN1LtgWWNaxj685QHwxHTDJfjB7KFTsRny8CAjkyxqLCLTegrwXQC7vMENFQFZ2UjGBYneFaRXHeCgA7KbE3k2LTUf",
  value:
    "eEz4q8VQ7PpDXaJDutEwVyN52KUEXcfKJ2A4wUBNJp6PgBkSF2cXpJ3tC8uz9fXG96rV8mTfw8dCBaJ5frMT3xE95RCWhaMUPBnPjs6V9ST3hxuTkYM66Njt8UucCvY6G7CJNafnJbnNBDRxRFGpgzyG41cmdu53qDGtjeh8yVQcRtFXcbQUmGcaaRJqtH1AcqbbBfqxCapxQsTtK5y5PEWqrbpZfF6s1H2uyPBjnT1ztXRE3g2PLVxVvMmRZeD9REevcPEeM3xqdD54GupzMWW5sw3naVWtaJVW3ZZGeaRsG74HJqkbmj1MDwnmN2jDJmJSECfmNwyxutDZ9X5ppjkynktWNnXRFmtCM9XcxA7gShBpXRMX1jmKA6JwCjK2V9yT2WwEmVVbffbB2NQuKEq7U2L8HNEn75eyxA7gShBpXRMX1jmKA6JwCjK2V9yT2WwEmVVbffbB2NQuKEq7U2L8HNEn75eywpHuzJc4sxbdfFExDAT1byu1SDhtyevspeZg8yHpyCPtebCRtgJFZL2W5e1xB7K7wQqEX6k7eKpPjZd29wShYT6jvkJDC4bPBP69Vkg65KZfNuD2tms71XNeu2LmePBqGPPBm8zCtLzkWTK3Jkj8W7VSEbn2enJRS2qNAYjhxWZrHyVM6fSVpTCWjWfybGmqkrcX3L8HtEk5V3SaSYxJK372VVJWcDQmafBtat5W6V5Pdb91",
  value: null
};

(async function initializeCookie() {
  let userData = await fetchusser();
  if (userData && userData.length > 0) {
    COOKIE_INFO.value = userData[0].cookie_value;
  }
})();
