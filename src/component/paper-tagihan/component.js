import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
function Tagihan() {
  return (
    <React.Fragment>
      <Paper
        style={{
          backgroundColor: '#F2DCA1',
          marginTop: '25px',
          height: '50px',
          width: '328px',
          marginLeft: '25px'
        }}>
        <Typography style={{ paddingTop: '15px', fontSize: '12px' }}>
          Total biaya yang belum dibayar
        </Typography>
        <Typography style={{ marginLeft: '215px', marginTop: '-16px' }}>
          Rp 1.500.000
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default Tagihan;
