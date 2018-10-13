const getPrice = require('./index')

describe(`getPrice function`, () => {
  it(`should get bitcoin price and show it`, () => {
    const priceBtc = getPrice('btc', 'usd')
    expect(priceBtc)
  })
})