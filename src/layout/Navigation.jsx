import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const Navigation = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '80vh' }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Navigation;
