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
export const Img = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
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
export const CoinVolume = styled.p`
  width: 155px;
`
export const CoinWatch = styled.button`
  cursor: pointer;
  width:150px;
  background: transparent;
  font-size: medium;
`

export const CoinGreen = styled.p`
  color: green;
`
export const CoinRed = styled.p`
  color: red;
`
