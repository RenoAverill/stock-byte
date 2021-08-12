import React from 'react'
import { StockContainer,
  StockRow,
  Stock,
  StockData,
  StockPrice,
  StockVolume} from './StockStyles'


const Stocks = ({name, price, volume}) => {
  return (
    <StockContainer>
    <StockRow>
      <Stock>
        <h1>{name.toUpperCase()}</h1>
      </Stock>
      <StockData>
        <StockPrice>STOCK PRICE: ${price}</StockPrice>
        <StockVolume>VOLUME: {volume}</StockVolume>
      </StockData>
    </StockRow>
  </StockContainer>
  )
}

export default Stocks
