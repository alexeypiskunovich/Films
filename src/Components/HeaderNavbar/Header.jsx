import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import Logo from '../../assed/Logo.png'

const HeaderNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Функции для открытия и закрытия меню
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#666', height: 85 }}>
      <Toolbar>
        <img
          src={Logo}
          style={{ height: '75px', width: '85px' }}
          alt="Logo"
        />
        <Typography variant="h6" style={{ marginLeft: '20px', color: '#fff', fontFamily: 'algerian', fontSize: '45px', marginTop:'10px' }}>
          Movies
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Button 
            color="inherit"
            variant="h6" 
            onClick={handleMenuClick}
            style={{fontSize: '25px',  fontFamily: 'algerian'}}
          >
            MENU
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <NavLink to='/myFavorite' style={{ textDecoration: 'none', color: 'inherit' }}>
                Favorite movies
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <NavLink to='/releases' style={{ textDecoration: 'none', color: 'inherit' }}>
                Releases
              </NavLink>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavbar;
