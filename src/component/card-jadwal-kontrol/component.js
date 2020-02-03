import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function CardJadwal() {
  return (
    <React.Fragment>
      <Paper
        style={{
          color: 'black',
          marginTop: '20px',
          height: '180px',
          width: '328px',
          marginLeft: '25px'
        }}>
        <Typography
          style={{
            fontSize: '18px',
            marginLeft: '10px',
            paddingTop: '9px',
            textAlign: 'center'
          }}>
          Jadwal Kontrol
        </Typography>
        <Typography
          style={{
            fontSize: '12px',
            marginLeft: '10px',
            color: 'green',
            textAlign: 'center'
          }}>
          Senin,12 Desember 2019
        </Typography>
        <Typography
          style={{
            marginLeft: '235px',
            marginTop: '-35px',
            fontSize: '13px',
            color: 'green',
            paddingTop: '100px'
          }}>
          #K1912D090
        </Typography>
        <Typography
          style={{ marginLeft: '235px', marginTop: '-40px', fontSize: '13px' }}>
          No Kontrol
        </Typography>
        <Typography
          style={{ marginTop: '-20px', marginLeft: '20px', fontSize: '15px' }}>
          <strong>Dr. Zack Richards, SP</strong>
        </Typography>
        <Typography style={{ marginLeft: '20px', fontSize: '13px' }}>
          Bedah Saraf
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default CardJadwal;
