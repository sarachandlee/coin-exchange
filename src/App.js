import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/ExchangeHeader/ExchangeHeader';
import './App.css';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: #282c34;
  color: white;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    hideOrShow: true,
    coinData: [
      {
        name: 'Bitcoin',
        balance: 100,
        ticker: 'BTC',
        price: 40000
      },
      {
        name: 'Ethereum',
        balance: 100,
        ticker: 'ETH',
        price: 2800
      },
      {
        name: 'Tether',
        balance: 100,
        ticker: 'USDT',
        price: 1.0
      },
      {
        name: 'Ripple',
        balance: 100,
        ticker: 'XRP',
        price: .75
      },
      {
        name: 'USD Coin',
        balance: 100,
        ticker: 'USDC',
        price: 1
      },
    ]
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( ( values ) => {
      let newValues = {...values};
      if( valueChangeTicker === newValues.ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;
    });
    
    this.setState( { coinData: newCoinData })
  }

  handleBalanceChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        hideOrShow: !oldState.hideOrShow
      }
    })
  }

  render() {
    return (
      <Div>
        <Header />
        <AccountBalance 
          amount={this.state.balance} 
          hideOrShow={this.state.hideOrShow} 
          handleBalanceChange={this.handleBalanceChange} 
        />
        <CoinList 
          coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh} 
          hideOrShow={this.state.hideOrShow} 
        />
      </Div>
    );  
  }
}

export default App;
