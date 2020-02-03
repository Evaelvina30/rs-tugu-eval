import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Antrian from '../../asset/Ambil Antrian.png';
import Periksa from '../../asset/Periksa Hari ini.png';
import Typography from '@material-ui/core/Typography';
import PeriksaBesok from '../../asset/Periksa Besok.png';
import JadwalDokter from '../../asset/Cek Jadwal Dokter.png';
function Grids() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper
            style={{
              height: '156px',
              width: '156px',
              marginTop: '30px',
              position: 'absolute',
              marginLeft: '25px'
            }}>
            <img
              src={Antrian}
              style={{
                position: 'absolute',
                width: '70px',
                height: '74px',
                marginLeft: '45px',
                marginTop: '20px'
              }}
            />
            <Typography
              style={{
                marginTop: '110px',
                marginLeft: '45px',
                fontSize: '11px'
              }}>
              <strong>Ambil Antrian</strong>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              height: '156px',
              width: '156px',
              marginTop: '30px',
              position: 'absolutes'
            }}>
            <img
              src={Periksa}
              style={{
                position: 'absolute',
                width: '70px',
                height: '74px',
                marginLeft: '45px',
                marginTop: '20px'
              }}
            />
            <Typography
              style={{
                fontSize: '11px',
                marginLeft: '40px',
                paddingTop: '110px'
              }}>
              <strong>Periksa Hari Ini</strong>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              height: '156px',
              width: '156px',
              position: 'absolute',
              marginTop: '5px',
              marginLeft: '25px'
            }}>
            <img
              src={PeriksaBesok}
              style={{
                position: 'absolute',
                width: '70px',
                height: '74px',
                marginLeft: '45px',
                marginTop: '20px'
              }}
            />
            <Typography
              style={{
                marginTop: '110px',
                marginLeft: '45px',
                fontSize: '11px'
              }}>
              <strong>Periksa Besok</strong>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            style={{
              height: '156px',
              width: '156px',
              marginTop: '5px',
              position: 'absolutes'
            }}>
            <img
              src={JadwalDokter}
              style={{
                position: 'absolute',
                width: '70px',
                height: '74px',
                marginLeft: '45px',
                marginTop: '20px'
              }}
            />
            <Typography
              style={{
                fontSize: '11px',
                marginLeft: '30px',
                paddingTop: '110px'
              }}>
              <strong>Cek Jadwal Dokter</strong>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Grids;
