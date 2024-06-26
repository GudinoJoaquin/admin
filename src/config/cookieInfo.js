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
  value: null
};

(async function initializeCookie() {
  let userData = await fetchusser();
  if (userData && userData.length > 0) {
    COOKIE_INFO.value = userData[0].cookie_value;
  }
})();
