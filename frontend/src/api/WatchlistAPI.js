const setWatchlistData = (ticker, price) => {
  let token = localStorage.getItem('auth-user')
  return fetch('http://localhost:8000/core/watchlist/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    content: {
      "ticker": ticker,
      "price": price
  }
  }).then(res=>res)
};

const getWatchlist = () => {
  let token = localStorage.getItem('auth-user')
  return fetch('http://localhost:8000/core/watchlist/',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res=>res.json())
  .then(data=>data)
};

export { getWatchlist, setWatchlistData }