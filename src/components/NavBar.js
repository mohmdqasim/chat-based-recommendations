import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#60381a' }}>
        <Toolbar variant="dense">
          <Link to="/" style={{ color: 'white', textDecoration: 'none', flexGrow: 1 }}>Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

