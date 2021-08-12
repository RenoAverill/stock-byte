import React from 'react'
import {
  WatchlistBox,
  WatchlistDataWrapper,
  WatchlistHeader,
  WatchlistCat,
  WatchlistWrapper
} from './WatchlistStyles'

const Watchlist = () => {
  return (
    <>
      <WatchlistBox>
      <WatchlistWrapper>
        <WatchlistHeader>
          <WatchlistCat>Name</WatchlistCat>
          <WatchlistCat>Price</WatchlistCat>
        </WatchlistHeader>
          <WatchlistDataWrapper>
          </WatchlistDataWrapper>
      </WatchlistWrapper>
    </WatchlistBox>
    </>
  )
}

export default Watchlist
