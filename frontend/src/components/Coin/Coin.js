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
CoinRed
} from './CoinStyles'

const Coins = ({name, image, symbol, price, volume, priceChange}) => {
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
