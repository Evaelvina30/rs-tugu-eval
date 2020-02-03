import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Person from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import History from '@material-ui/icons/History';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Box from '@material-ui/core/Box';

function Navigation() {
  return (
    <Box justifyContent="center" display="flex">
      <React.Fragment>
        <BottomNavigation
          position="fixed"
          style={{
            width: '495px',
            marginTop: '10px',
            color: '#eeeeee',
            position: 'fixed',
            bottom: '0',
            zIndex: 'auto'
          }}>
          <BottomNavigationAction
            label="Beranda"
            value="beranda"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Riwayat"
            value="riwayat"
            icon={<History />}
          />
          <BottomNavigationAction
            label="Bantuan"
            value="bantuan"
            icon={<HelpOutline />}
          />
          <BottomNavigationAction
            label="Profil"
            value="profil"
            icon={<Person />}
          />
        </BottomNavigation>
      </React.Fragment>
    </Box>
  );
}

export default Navigation;
