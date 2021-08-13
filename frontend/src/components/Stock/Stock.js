import React from 'react'
import { StockContainer,
  StockRow,
  Stock,
  StockData,
  StockPrice,
  StockVolume,
  StockWatch} from './StockStyles'


const Stocks = ({name, price, volume, iv}) => {
  return (
    <StockContainer>
    <StockRow>
      <Stock>
        <h1>{name.toUpperCase()}</h1>
      </Stock>
      <StockData>
        <StockPrice>STOCK PRICE: ${price}</StockPrice>
        <StockVolume>VOLUME: {volume}</StockVolume>
        <StockVolume>IMPLIED VOLATILITY: {iv}</StockVolume>
        <StockWatch>ADD TO WATCHLIST!</StockWatch>
      </StockData>
    </StockRow>
  </StockContainer>
  )
}

export default Stocks
