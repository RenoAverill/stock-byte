import React from 'react'
import {
  WatchlistBox,
  WatchlistDataWrapper,
  WatchlistHeader,
  WatchlistCat,
  WatchlistWrapper,
  WatchlistTicker,
  WatchlistPrice,

} from './WatchlistStyles'
import { useState, useEffect } from 'react'
import { getWatchlist } from '../../api/WatchlistAPI'


  
const Watchlist = () => {
  const [ticker, setTicker] = useState(null)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    getWatchlist()
  })

  let renderWatchlistItems = () => {
    return (
      <>
        <WatchlistTicker>{ticker}</WatchlistTicker>
        <WatchlistPrice>{price}</WatchlistPrice>
      </> 
    )
  }
  return (
    <>
      <WatchlistBox>
        <WatchlistHeader>
          <WatchlistCat>Name</WatchlistCat>
          <WatchlistCat>Price</WatchlistCat>
        </WatchlistHeader>
        <WatchlistDataWrapper>
          {renderWatchlistItems()}
        </WatchlistDataWrapper>
      </WatchlistBox>
    </>
  )
}

export default Watchlist
