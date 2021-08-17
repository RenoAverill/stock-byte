import React from 'react'
import {CoinContainer,
  CoinRow,
  Coin,
  CoinData,
  CoinPrice,
  CoinVolume,
  CoinSymbol,
} from './WatchlistStyles'

  
const Watchlist = ({ticker, price}) => {

  return (
    <CoinContainer>
    <CoinRow>
      <Coin>
        <CoinSymbol>{ticker}</CoinSymbol>
      </Coin>
      <CoinData>
        <CoinPrice>PRICE: ${price}</CoinPrice>
        <CoinVolume>VOLUME: Soon to come!</CoinVolume>
      </CoinData>
    </CoinRow>
  </CoinContainer>
  )
}

export default Watchlist
