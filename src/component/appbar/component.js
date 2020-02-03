import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Gambar from '../../asset/Ellipse.png';
import Profile from '../../asset/profile.png';
function Appbarr() {
  return (
    <Box justifyContent="center" display="flex">
      <React.Fragment>
        <Appbar
          position="static"
          style={{
            backgroundColor: '#66BB6A',
            height: '30px',
            position: 'fixed',
            width: '395px',
            zIndex: '50'
          }}>
          <img
            src={Gambar}
            style={{ marginTop: '-35px', position: 'static' }}
          />
          <img
            src={Profile}
            style={{
              width: '40px',
              height: '40px',
              marginLeft: '315px',
              marginTop: '-130px'
            }}
          />
          <Typography
            style={{ color: 'black', marginLeft: '20px', marginTop: '-46px' }}>
            <strong>Richard William</strong>
          </Typography>
          <p
            style={{
              color: 'black',
              fontSize: '12px',
              marginLeft: '20px',
              marginTop: '-5px'
            }}>
            NIK 345678903412
          </p>
        </Appbar>
      </React.Fragment>
    </Box>
  );
}

export default Appbarr;
