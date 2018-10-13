const fetch = require('whatwg-fetch');

module.exports = async (coin, localCurrency) => {
  setInterval(fetch(`https://api.cryptonator.com/api/ticker/${coin}-${localCurrency}`)
    .then((resp) => resp.json())
    .then(function(data) {

      const price = parseFloat(data.ticker.price).toFixed(2)

      const change = parseFloat(data.ticker.change).toFixed(2)

      return console.log(price, change)

    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    })
  , 30000)
}