import React from 'react';
import PropTypes from 'prop-types';

export default function Coin(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.handleRefresh(props.tickerId);
  }

  return (
      <tr>
          <td>{props.name}</td>
          <td>{props.ticker}</td>
          <td>${props.price}</td>
          {props.hideOrShow ? <td>${props.balance}</td> : null}
          <td>
            <button onClick={handleClick} className='btn btn-primary btn-sm'>Refresh</button>
          </td>
      </tr>
  )

}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}