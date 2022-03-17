import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import Header from './components/ExchangeHeader/ExchangeHeader';

import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: #282c34;
  color: white;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 40000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 2800
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: .75
        },
        {
          name: 'USD Coin',
          ticker: 'USDC',
          price: 1
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map( ({ ticker, name, price }) => {
      let newPrice = price;
      if( valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });
    
    this.setState( { coinData: newCoinData })
  }
  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );  
  }
}

export default App;
