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
import WatchlistAPI from '../../api/WatchlistAPI'

const Coins = ({name, image, symbol, price, volume, priceChange}) => {

  const setData = () => WatchlistAPI.setWatchlistData(symbol, price)
  
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
