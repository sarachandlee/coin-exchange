import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/ExchangeHeader/ExchangeHeader';
import axios from 'axios';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

const COIN_COUNT = 10;

const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props) {

  const [balance, setBalance] = useState(10000);
  const [hideOrShow, setHideOrShow] = useState(false);
  const [coinData, setCoinData] = useState([]);


  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers/');
    const coinData = response.data.sort(function (x, y) {
                      return x.rank - y.rank;
                  })
                  .slice(0, COIN_COUNT);
    //Retreive the prices
    const coinPriceData = coinData.map( function(coin) {
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price:formatPrice(coin.quotes['USD'].price),
      }
    });
    setCoinData(coinPriceData);
  }

  useEffect(function() {
    if( coinData.length === 0 ) {
      //component did mount
      componentDidMount();
    } 
  });

  const handleRefresh = async (valueChangeId) => {
    const tickerURL = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerURL);
    const newPrice = formatPrice(response.data.quotes['USD'].price);
    const newCoinData = coinData.map( function(values) {
        let newValues = {...values};
        if( valueChangeId === values.tickerId ) {
          newValues.price = newPrice;
        }
        return newValues;
    })
    setCoinData(newCoinData);
  }

  const handleBalanceChange = () => {
    setHideOrShow(oldValue => !oldValue);
  }

  const getCash = () => {
    setBalance(balance => balance + 1000);
  }

  return (
    <main className='text-center'>
      <Header />
      <AccountBalance 
        amount={balance} 
        hideOrShow={hideOrShow} 
        handleBalanceChange={handleBalanceChange} 
        getCash = {getCash}
      />
      <CoinList 
        coinData={coinData} 
        handleRefresh={handleRefresh} 
        hideOrShow={hideOrShow} 
      />
    </main>
  );  
}

export default App;
