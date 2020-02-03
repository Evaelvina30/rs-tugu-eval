import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Antrian() {
  return (
    <React.Fragment>
      <Paper
        style={{
          width: '328px',
          height: '175px',
          marginLeft: '25px',
          marginTop: '-40px'
        }}>
        <Typography
          style={{
            fontSize: '18px',
            textAlign: 'center',
            color: 'black',
            marginTop: '200px'
          }}>
          Nomer Antrian Anda
        </Typography>
        <Typography
          style={{ fontSize: '30px', textAlign: 'center', color: 'green' }}>
          <strong>24B</strong>
        </Typography>
        <Typography style={{ textAlign: 'center', color: 'green' }}>
          (Loket B)
        </Typography>
        <Typography style={{ textAlign: 'center', fontSize: '10px' }}>
          5 nomor lagi
        </Typography>
        <Button
          style={{
            backgroundColor: '#a5d6a7',
            marginLeft: '60px',
            marginTop: '10px'
          }}>
          <Typography style={{ fontSize: '10px' }}>
            Estimasi Dipanggil pukul 12.00 WIB
          </Typography>
        </Button>
      </Paper>
    </React.Fragment>
  );
}

export default Antrian;
