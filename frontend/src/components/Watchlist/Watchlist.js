import React from 'react'
import {
  WatchlistBox,
  WatchlistDataWrapper,
  WatchlistHeader,
  WatchlistCat,
  WatchlistWrapper,
  WatchlistData
} from './WatchlistStyles'

const Watchlist = () => {
  return (
    <>
      <WatchlistBox>
        <WatchlistHeader>
          <WatchlistCat>Name</WatchlistCat>
          <WatchlistCat>Price</WatchlistCat>
        </WatchlistHeader>
      </WatchlistBox>
    </>
  )
}

export default Watchlist
