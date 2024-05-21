import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <AppBar position="static" sx={{ backgroundColor: '#60381a', width: '10%', marginLeft:'1280px' }}>
        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
