import React from 'react';
import PropTypes from 'prop-types';

export default function AccountBalance(props) {
  const buttonText = (props.hideOrShow) ? 'Hide Balance' : 'Show Balance';
  const buttonClass = 'btn ms-2 ' + (props.hideOrShow ? 'btn-warning' : 'btn-info');

  let content = null;
  
  if( props.hideOrShow  ) {
    content = <><h3>Balance: ${props.amount}</h3></>;
  }

  return (
    <section className='mb-3'>
      {content}
      <button onClick={props.handleBalanceChange} className={buttonClass}>{buttonText}</button>
      <button onClick={props.getCash} className='btn btn-success ms-2'>
        <i className="fa-solid fa-helicopter"></i> Get Some Cash
      </button>
    </section>
  );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}