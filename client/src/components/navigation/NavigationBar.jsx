import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';

const NavigationBarRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

function NavigationBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
      <NavigationBarRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Outlet />
        </Box>
      </NavigationBarRoot>
    </>
  );
}

export default NavigationBar;
