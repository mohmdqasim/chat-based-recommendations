import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const fetchUserProfileImage = () => {
  return 'url_to_user_profile_image';
};

export default function DenseAppBar() {
  const userProfileImage = fetchUserProfileImage();

  return (
    <Toolbar variant="dense" sx={{ justifyContent: 'center', marginLeft: '1290px', padding: 0, pointerEvents: 'none' }}>
      <Link to="/" style={{ flexGrow: 1, pointerEvents: 'auto' }}>
        <div style={{ display: 'inline-block', margin: 0,}}>
          <img
            src={userProfileImage}
            alt="User Profile"
            style={{ width: '25px', height: '25px', borderRadius: '50%', border: '1px solid black', display: 'block', margin: 0, }}
          />
          apple
        </div>
      </Link>
    </Toolbar>
  );
}
