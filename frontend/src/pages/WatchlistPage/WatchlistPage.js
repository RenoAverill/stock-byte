import React from 'react'
import Watchlist from '../../components/Watchlist/Watchlist'

const WatchlistPage = () => {

  const renderWatchlist = () => {
    return (
      <Watchlist></Watchlist>
    )
  }
  return (
    <>
      <h1>Watchlist PAGE!!!</h1>
      {renderWatchlist()}
    </>
  )
}

export default WatchlistPage
