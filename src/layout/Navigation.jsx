import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const Navigation = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Navigation;
