import React from 'react'
import { useState, useEffect } from 'react'
import Stocks from '../../components/Stock/Stock'


const StockPage = () => {
  const [stocks, setStocks] = useState([])
  const [search, setSearch] = useState('')
  
  const BASE_URL = `https://api.tdameritrade.com/v1/marketdata/quotes?apikey=9MPYNAFHT088WTRKTY6NXJAKJLDIDSG8&symbol=${search}`

  useEffect(() => {
    fetch(`${BASE_URL}`)
    .then(res=>res.json())
    .then(data=>{
      setStocks(data)
    })
    .catch(error=>alert(error))
  },[search])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setSearch(evt.target[0].value)
  }

  const renderStocks = ()=>{
    let value = search.toLocaleUpperCase()
    let stockObj = stocks[value]
    if (stockObj){
      return (
        <Stocks
          name={search}
          price={stockObj.bidPrice}
          volume={stockObj.totalVolume}
          iv={stockObj.volatility}
          />
      )
    } 
  }


  return (
        <div className='coin-app'>
          <div className='coin-search'>
            <h1 className='coin-text'>Search a Stock</h1>
            <form onSubmit={handleSubmit}>
              <input
              type='text'
              placeholder='Search'
              className='coin-input'
              ></input>
              <button type='submit' className="hidden"></button>
            </form>
          </div>
          {renderStocks()}
        </div>
  )
}

export default StockPage

