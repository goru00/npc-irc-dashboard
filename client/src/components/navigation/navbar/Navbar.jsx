import styled from '@emotion/styled';
import {
  AppBar,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

function Navbar(props) {
  const { onSidebarOpen } = { ...props };
  return (
    <div>
      <NavbarRoot
        sx={{
          left: {
            lg: 240,
          },
          width: {
            lg: 'calc(100% - 200px)',
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none',
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </NavbarRoot>
    </div>
  );
}

export default Navbar;
