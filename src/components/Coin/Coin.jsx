import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const Td = styled.td`
  border: 1px solid #ccc;
  width: 25vh;
`;

export default class Coin extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.handleRefresh(this.props.ticker);
  }
  render() {
    return (
        <tr>
            <Td>{this.props.name}</Td>
            <Td>{this.props.ticker}</Td>
            <Td>${this.props.price}</Td>
            {this.props.hideOrShow ? <Td>${this.props.balance}</Td> : null}
            <Td>
              <button onClick={this.handleClick}>Refresh</button>
            </Td>
        </tr>
    )
  }
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}