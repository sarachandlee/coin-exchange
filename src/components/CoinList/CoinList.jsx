import React from 'react';
import Coin from '../Coin/Coin';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import styled from 'styled-components';

// const Table = styled.table`
//     margin: 50px auto;
//     display:inline-block;
//     font-size: 1.4rem;
// `

export default function CoinList(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Ticker</TableCell>
            <TableCell>Price</TableCell>
            {props.hideOrShow ? <TableCell>Balance</TableCell> : null}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </TableContainer>
    //   <Table>
    //   <thead>
    //     <tr>
    //       <th>Name</th>
    //       <th>Ticker</th>
    //       <th>Price</th>
    //       {props.hideOrShow ? <th>Balance</th> : null}
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {
    //       props.coinData.map( ({key, name, ticker, balance, price}) => 
    //         <Coin 
    //           key={key} 
    //           handleRefresh={props.handleRefresh} 
    //           balance={balance} 
    //           name={name} 
    //           ticker={ticker} 
    //           price={price} 
    //           hideOrShow={props.hideOrShow} 
    //           tickerId={key}
    //         /> 
    //       )
    //     }
    //   </tbody>
    // </Table>
  )
}
