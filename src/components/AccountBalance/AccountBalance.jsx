import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 3rem;
  max-width: 80%;
  padding:1.5rem;
  margin: 0 auto;
`;

export default class AccountBalance extends Component {
  render() {
    const buttonText = (this.props.hideOrShow) ? 'Hide Balance' : 'Show Balance';
    let content = null;
    if( this.props.hideOrShow  ) {
      content = <>Balance: ${this.props.amount}</>;
    }
    return (
      <Section>
        {content}
        <button onClick={this.props.handleBalanceChange}>{buttonText}</button>
      </Section>
    );
  }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}