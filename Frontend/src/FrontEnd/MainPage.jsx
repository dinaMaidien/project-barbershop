// src/components/FrontEnd/MainPage.jsx

import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ImgSlider } from './signup/ImgSlider';

const MainPage = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    if (isAuthenticated) {
      navigate("/booking-form"); // Navigate to booking form
    } else {
      navigate("/signin"); // Navigate to sign-in if not authenticated
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
      <Typography variant="h2" gutterBottom>
        Welcome to AR BarberShop
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your premium barbershop booking system
      </Typography>

      <Box width="80%" maxWidth="700px" mx="auto">
        <ImgSlider />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleBooking}
        sx={{ mt: 3 }}
      >
        Book Your Slot Now!
      </Button>
    </Box>
  );
};

export default MainPage;
