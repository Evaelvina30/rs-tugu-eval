import React from 'react';
import Navigation from '../../component/bottom-navigation';
import Container from '@material-ui/core/Container';
import Appbarr from '../../component/appbar';
import Grids from '../../component/grid';
import Cards from '../../component/card';
import Tagihan from '../../component/paper-tagihan';
import CardJadwal from '../../component/card-jadwal-kontrol';
import Antrian from '../../component/card-no-antrian';
function Home() {
  return (
    <Container maxWidth="xs">
      <Appbarr />
      <Antrian />
      <CardJadwal />
      <Tagihan />
      <Grids />
      <Cards />
      <Navigation />
    </Container>
  );
}

export default Home;
