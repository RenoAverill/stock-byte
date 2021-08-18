import React from 'react'
import {CoinContainer,
CoinRow,
Coin,
CoinData,
CoinPrice,
CoinVolume,
CoinSymbol,
Img,
CoinGreen,
CoinRed,
CoinWatch
} from './CoinStyles'

const Coins = ({name, image, symbol, price, volume, priceChange}) => {

  const setData = () => {
    return setWatchlistData(symbol, price)
  }

  const setWatchlistData = async (ticker, price) => {
    console.log(ticker, price)
    let token = localStorage.getItem('auth-user')
    let data = await fetch('http://localhost:8000/core/watchlist/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      body: JSON.stringify({
        "ticker": `${ticker}`,
        "price": `${price}`
    })
    })
    let response = await data.json()
    await console.log(response)
  };
  
  return (
      <CoinContainer>
        <CoinRow>
          <Coin>
            <Img src={image} alt='stock img'/>
            <h1>{name}</h1>
            <CoinSymbol>{symbol}</CoinSymbol>
          </Coin>
          <CoinData>
            <CoinPrice>COIN PRICE: ${price}</CoinPrice>
            <CoinVolume>VOLUME: {volume}</CoinVolume>
            <CoinWatch onClick={setData} >ADD TO WATCHLIST!</CoinWatch>
            {priceChange < 0 ? (
            <CoinRed>{priceChange.toFixed(2)}</CoinRed>
          ) : (<CoinGreen>{priceChange.toFixed(2)}</CoinGreen>)
        }
          </CoinData>
        </CoinRow>
      </CoinContainer>
  )
}

export default Coins
