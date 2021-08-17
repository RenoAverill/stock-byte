import React from 'react'
import Watchlist from '../../components/Watchlist/Watchlist'
import { useState, useEffect } from 'react'

const WatchlistPage = () => {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    let token = localStorage.getItem('auth-user')
    return fetch('http://localhost:8000/core/watchlist/',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res=>res.json())
    .then(data=>setStocks(data))
    .catch(error => alert(error))
  }, [])

  const renderWatchlist = stocks.map(item=>{
    return (
        <Watchlist
        ticker={item.ticker}
        price={item.price}
        />
      )
    })



  return (
    <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Welcome to your Watchlist!</h1>
      </div>
      {renderWatchlist}
    </div>
  )
}


export default WatchlistPage
