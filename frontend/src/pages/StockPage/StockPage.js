import React from 'react'
import { useState, useEffect } from 'react'
import Stocks from '../../components/Stock/Stock'

const BASE_URL = "https://api.tdameritrade.com/v1/marketdata/quotes?apikey=9MPYNAFHT088WTRKTY6NXJAKJLDIDSG8&symbol=goog"

const StockPage = () => {
  const [stocks, setStocks] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    fetch(`${BASE_URL}`)
    .then(res=>res.json())
    .then(data=>{
      setStocks(data)})
    .catch(error=>alert(error))
  },[])

  const handleChange = (evt) => {
    setSearch(evt.target.value)
  }

  const renderStocks = ()=>{
    return (
      <Stocks price={stocks[0]}/>
      )
    }


  return (
        <div className='coin-app'>
          <div className='coin-search'>
            <h1 className='coin-text'>Search a Stock</h1>
            <form>
              <input type='text' placeholder='Search'
              className='coin-input' onChange={handleChange}/>
            </form>
          </div>
          {renderStocks()}
        </div>
  )
}

export default StockPage

