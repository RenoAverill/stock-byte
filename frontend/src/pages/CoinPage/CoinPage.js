import React from 'react'
import { useState, useEffect } from 'react'
import Coins from '../../components/Coin/Coin'
import axios from 'axios'

const CoinPage = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then(res => {
      setCoins(res.data)
    }).catch(error => alert(error))
  }, [])

  const handleChange = (evt) => {
    setSearch(evt.target.value)
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  const renderCoins = filteredCoins.map(coin=>{
    return (
      <Coins key={coin.id} 
      name={coin.name} 
      image={coin.image}
      symbol={coin.symbol}
      volume={coin.total_volume}
      price={coin.current_price}
      priceChange={coin.price_change_percentage_24h}
      />
    )
  })

  return (
        <div className='coin-app'>
          <div className='coin-search'>
            <h1 className='coin-text'>Search a currency</h1>
            <form>
              <input type='text' placeholder='Search'
              className='coin-input' onChange={handleChange}/>
            </form>
          </div>
          {renderCoins}
        </div>
  )
}

export default CoinPage
