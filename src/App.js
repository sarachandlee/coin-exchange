import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/ExchangeHeader/ExchangeHeader';
import './App.css';
import axios from 'axios';
import Container from '@mui/material/Container';

const COIN_COUNT = 10;

const formatPrice = price => parseFloat(Number(price).toFixed(4));

function App(props) {

  const [balance, setBalance] = useState(10000);
  const [hideOrShow, setHideOrShow] = useState(true);
  const [coinData, setCoinData] = useState([]);


  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins')
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
    const tickerURL = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map( key => axios.get(tickerURL + key));
    const coinData = await Promise.all(promises);
    console.log(coinData);
    //Retreive the prices
    const coinPriceData = coinData.map( function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price:formatPrice(coin.quotes['USD'].price),
      }
    })
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

  const getCrypto = () => {
    setBalance( balance + 1000 );
  }

  return (
    <Container maxWidth="lg">
      <Header />
      <AccountBalance 
        amount={balance} 
        hideOrShow={hideOrShow} 
        handleBalanceChange={handleBalanceChange} 
        getCrypto={getCrypto}
      />
      <CoinList 
        coinData={coinData} 
        handleRefresh={handleRefresh} 
        hideOrShow={hideOrShow} 
      />
    </Container>
  );  
}

export default App;
