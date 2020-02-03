import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Gambar from '../../asset/Image.png';
import Button from '@material-ui/core/Button';
function Cards() {
  return (
    <React.Fragment>
      <Paper
        style={{
          color: 'black',
          marginTop: '20px',
          height: '300px'
        }}>
        <Typography
          style={{ paddingTop: '15px', marginLeft: '10px', fontSize: '12px' }}>
          Berita Terkini
        </Typography>
        <Typography
          style={{
            marginTop: '-15px',
            marginLeft: '290px',
            fontSize: '12px',
            color: 'orange'
          }}>
          Lihat Semua
        </Typography>
        <img
          src={Gambar}
          style={{ marginLeft: '25px', width: '340', height: '156px' }}
        />
        <Typography style={{ marginLeft: '5px' }}>
          4 Kegiatan pagi yang disarankan para ahli
        </Typography>
        <Typography style={{ fontSize: '16px', marginLeft: '2px' }}>
          Lorem ipsum dolor sit amet, consectetur adipisching elit
        </Typography>
        <Button
          style={{
            backgroundColor: 'green',
            marginLeft: '300px',
            marginTop: '-10px'
          }}>
          BUKA
        </Button>
      </Paper>
    </React.Fragment>
  );
}

export default Cards;
