import React from 'react'
import {CoinContainer,
  CoinRow,
  Coin,
  CoinData,
  CoinPrice,
  CoinDelete,
  CoinSymbol,
} from './WatchlistStyles'

  
const Watchlist = ({ticker, price}) => {

  const deleteData = () => {
    return deleteWatchlistData(ticker, price)
  }

  const deleteWatchlistData = async (ticker) => {
    console.log(ticker, price)
    let token = localStorage.getItem('auth-user')
    let data = await fetch('http://localhost:8000/core/watchlist/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      body: JSON.stringify({
        "ticker": `${ticker}`,
    })
    })
    let response = await data.json()
    await console.log(response)
  };
  return (
    <CoinContainer>
    <CoinRow>
      <Coin>
        <CoinSymbol>{ticker}</CoinSymbol>
      </Coin>
      <CoinData>
        <CoinPrice>PRICE: ${price}</CoinPrice>
        <CoinDelete onClick={deleteData}>Delete</CoinDelete>
      </CoinData>
    </CoinRow>
  </CoinContainer>
  )
}

export default Watchlist
