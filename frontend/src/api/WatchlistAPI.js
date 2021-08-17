const setWatchlistData = (ticker, price) => {
  let token = localStorage.getItem('auth-user')
  return fetch('http://localhost:8000/core/watchlist/watchlist/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: JSON.stringify(ticker, price)
  }).then(res => res)
};

const getWatchlist = () => {
  let token = localStorage.getItem('auth-user')
  console.log(token)
  return fetch('http://localhost:8000/core/watchlist/watchlist/?format=json',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => console.log(res))
};

export { getWatchlist, setWatchlistData }