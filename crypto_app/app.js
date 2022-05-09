var baseURL = "https://api.coinranking.com/v2/coins"
var proxyURL = "https://cors-anywhere.herokuapp.com/"
var apiKey = "coinranking9c72ef226790800c97dd4204220238f00c379213afaf5ed8"

fetch(`${proxyURL}${baseURL}`, {
method: "GET",
headers: {
    "Content-Type": "application/json",
    "x-access-token": `${apiKey}`,
    "Access-Control-Allow-Origin": "*"
}
}).then ((response) => {
    if(response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)

            let coinsData = json.data.coins

            if(coinsData.length > 0) {
                var cryptoCoins = ""
            }

            // for Loop Starts
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                cryptoCoins += ` <td> ${coin.uuid} </td>`;
                cryptoCoins += ` <td> ${coin.btcPrice} </td>`;
                cryptoCoins += ` <td> ${coin.rank} </td>`;
                cryptoCoins += ` <td> ${coin.tier} </td>`;
                cryptoCoins += ` <td> ${coin.name} </td>`;
                cryptoCoins += ` <td> $${Math.round(coin.price)} Billion </td>`;
                cryptoCoins += ` <td> ${coin.symbol} </td>`;"</tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins;
        })
    }
}).catch((error) => {
    console.log(error)
})

