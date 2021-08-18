import styled from "styled-components";

export const CoinContainer = styled.div`
  display:flex;
  justify-content: center;
  z-index: 15;
`

export const CoinRow = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 990px;
`
export const Coin = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;

  && h1 {
    font-size: 16px;
    width:150px;
  }
`
export const CoinSymbol = styled.p`
  text-transform: uppercase;;
`
export const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;

  `
export const CoinPrice = styled.p`
  width: 130px;
`
export const CoinDelete = styled.button`
  width: 155px;
  color:white;
  background-color:transparent
  `

