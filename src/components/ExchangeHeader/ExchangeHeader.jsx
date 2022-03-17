import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
`;

const Img = styled.img`
    height: 8rem;
    pointer-events: none;
`;

const H1 = styled.h1`
    font-size: 4rem;
`

export default class ExchangeHeader extends Component {
    constructor(props) {
        super(props);
        this.logo = logo;
    }
  render() {
    return (
        <Header>
            <Img src={this.logo} alt='React logo' />
            <H1 className='App-title'>Coin Exchange</H1>
        </Header>
    )
  }
}
