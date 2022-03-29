import React from 'react';
import Typography from '@mui/material/Typography';

// const H1 = styled.h1`
//     font-size: 4rem;
// `

export default function ExchangeHeader() {
    return (
        <header>
            <Typography variant="h1" component="div" gutterBottom>
                Coin Exchange
            </Typography>
        </header>
    )
}
