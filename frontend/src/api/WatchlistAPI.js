const setWatchlistData = (ticker, price) => {
  let token = localStorage.getItem('auth-user')
  return fetch('http://localhost:8000/core/watchlist/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    },
    body: {
      "ticker": 'letstrythisout',
      "price": '12341231231'
  }
  }).then(res=>res)
};

export default {
  setWatchlistData
}