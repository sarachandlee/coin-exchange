import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

export default function Coin(props) {
  const handleClick = (event) => {
    event.preventDefault();
    props.handleRefresh(props.tickerId);
  }

  return (
      <TableRow>
          <TableCell>{props.name}</TableCell>
          <TableCell>{props.ticker}</TableCell>
          <TableCell>${props.price}</TableCell>
          {props.hideOrShow ? <TableCell>${props.balance}</TableCell> : null}
          <TableCell>
            <Button onClick={handleClick} variant="contained" color="success">Refresh</Button>
          </TableCell>
      </TableRow>
  )

}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}