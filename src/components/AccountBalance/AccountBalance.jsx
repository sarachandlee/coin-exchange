import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AccountBalance(props) {
  const buttonText = (props.hideOrShow) ? 'Hide Balance' : 'Show Balance';
  let content = null;

  if( props.hideOrShow  ) {
    content = <Typography variant="h4" component="h4" gutterBottom>
                Balance: ${props.amount}
              </Typography>
  }

  return (
    <Box >
      <Stack spacing={2} direction="row" sx={{ justifyContent: 'center', mb: 2 }}>
        {content}
        <Button variant="outlined" onClick={props.handleBalanceChange}>{buttonText}</Button>
        <Button variant="contained" onClick={props.getCrypto}>Get $$</Button>
      </Stack>
    </Box>
  );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}