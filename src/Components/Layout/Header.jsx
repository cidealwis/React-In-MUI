import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo from '../../assets/image/logo.png'; // Adjust the path as needed
import { Link } from 'react-router-dom';



const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <Box
        component="img"
        sx={{
          height: isMobile ? 40 : 50,
          width: isMobile ? 80 : 100,
          marginBottom: isMobile ? '10px' : '0',
        }}
        alt="Logo"
        src={logo}
      />
      <Box
        sx={{
          display: 'flex',
          gap: isMobile ? '10px' : '20px',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          marginBottom: isMobile ? '10px' : '0',
        }}
      >
        <Typography variant={isMobile ? 'body1' : 'h6'}><Link to="/" style={{ textDecoration: 'none' }}>HOME</Link></Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'}><Link to="/bloges" style={{ textDecoration: 'none' }}>BLOGS</Link></Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'}><Link to="/news" style={{ textDecoration: 'none' }}>NEWS</Link></Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          color: 'white',
          borderRadius: '20px',
          padding: isMobile ? '5px 10px' : '5px 20px',
        }}
      >
        <Typography variant={isMobile ? 'body1' : 'h6'}>SIGN IN</Typography>
      </Button>
    </Box>
  );
};

export default Header;
