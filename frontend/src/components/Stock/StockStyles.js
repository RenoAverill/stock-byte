import styled from "styled-components";

export const StockContainer = styled.div`
  display:flex;
  justify-content: center;
  z-index: 15;
`

export const StockRow = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 990px;
`
export const Stock = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;

  && h1 {
    font-size: 16px;
    width:150px;
  }
`

export const StockData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;

  `
export const StockPrice = styled.p`
  width: 130px;
`
export const StockVolume = styled.p`
  width: 100px;
`
export const StockWatch = styled.button`
  cursor: pointer;
  width:150px;
  background: transparent;
  font-size: medium;
`