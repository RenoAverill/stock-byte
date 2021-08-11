
const BASE_URL = "https://api.tdameritrade.com/v1/marketdata/quotes?apikey=9MPYNAFHT088WTRKTY6NXJAKJLDIDSG8&symbol=goog"


const fetchTDA = () =>{
  let data = fetch(`${BASE_URL}`)
  .then(res=>res.json())
  .then(data=>data)
}



export default {
  fetchTDA
}