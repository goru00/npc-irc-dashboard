import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {
  Box,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import SidebarLink from './SidebarLink';

const sidebarLinks = [
  {
    href: '/',
    icon: (<HomeIcon fontSize="small" />),
    title: 'Главная',
  },
  {
    href: '/mpe_1gem',
    icon: (<AssignmentIcon fontSize="small" />),
    title: 'Планирование поставок',
  },
];

function Sidebar(props) {
  const { open, onClose } = { ...props };
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });
  const contentSidebar = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        mt: 2,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        {sidebarLinks.map((sidebarLink) => (
          <SidebarLink
            key={sidebarLink.title}
            title={sidebarLink.title}
            href={sidebarLink.href}
            icon={sidebarLink.icon}
          />
        ))}
      </Box>
    </Box>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#fff',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {contentSidebar}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#fff',
          width: 280,
        },
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
      variant="temporary"
    >
      {contentSidebar}
    </Drawer>
  );
}

export default Sidebar;
