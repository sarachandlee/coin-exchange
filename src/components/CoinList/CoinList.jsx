import React from 'react';
import Coin from '../Coin/Coin';

export default function CoinList(props) {
  return (
      <table className='table table-hover table-striped table-bordered mx-auto w-75'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Ticker</th>
          <th scope='col'>Price</th>
          {props.hideOrShow ? <th scope='col'>Balance</th> : null}
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.coinData.map( ({key, name, ticker, balance, price}) => 
            <Coin 
              key={key} 
              handleRefresh={props.handleRefresh} 
              balance={balance} 
              name={name} 
              ticker={ticker} 
              price={price} 
              hideOrShow={props.hideOrShow} 
              tickerId={key}
            /> 
          )
        }
      </tbody>
    </table>
  )
}
