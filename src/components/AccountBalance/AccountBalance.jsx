import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 3rem;
  max-width: 80%;
  padding:1.5rem;
  margin: 0 auto;
`;

export default function AccountBalance(props) {
  const buttonText = (props.hideOrShow) ? 'Hide Balance' : 'Show Balance';
  let content = null;
  
  if( props.hideOrShow  ) {
    content = <>Balance: ${props.amount}</>;
  }

  return (
    <Section>
      {content}
      <button onClick={props.handleBalanceChange}>{buttonText}</button>
      <button onClick={props.getCash}>Get Some Cash</button>
    </Section>
  );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}