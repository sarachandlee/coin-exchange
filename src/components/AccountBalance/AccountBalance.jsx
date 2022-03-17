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
    return (
      <Section>
        Balance: ${this.props.amount}
      </Section>
    );
  }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}