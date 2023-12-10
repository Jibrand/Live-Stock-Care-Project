import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Current Balance    </Title>
      <div style={{ textAlign: "center", color: "#430e7e", fontWeight: "bold" }}>
        <Typography component="p" variant="h5"> <b> $23,321.0</b> </Typography>
      </div>
      <Title>Deposit Balance    </Title>
      <div style={{ textAlign: "center", color: "#430e7e", fontWeight: "bold" }}>
        <Typography component="p" variant="h5"> <b> $3,321.0</b> </Typography>
      </div>
      <hr/>
      <Title>Total Balance    </Title>
      <div style={{ textAlign: "center", color: "#430e7e", fontWeight: "bold" }}>
        <Typography component="p" variant="h5"> <b> $22 3,321.0</b> </Typography>
      </div>
     
    </React.Fragment>
  );
}
