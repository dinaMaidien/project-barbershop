import React, { useState, useEffect } from 'react';
import "../CusProfile/CusProfile.css";
import { Card } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Grid, Button} from "@mui/material";

import { Link } from 'react-router-dom';

const CustomerProfile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.body.classList.add('page-customer-profile');

    fetchData();

    return () => {
      document.body.classList.remove('page-customer-profile');
    };
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/users/profile', {
        method: 'GET',
        credentials: 'include', // Include credentials (cookies) in the request
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      setData(result); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
console.log(data);

  return (

  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}> {/* Flexbox for column layout */}
  {/* First Card - Profile Information */}
  <Card style={{ marginTop: '10px' }}>
    {data.user ? (
      // <div className="card-wrap">
      <CardContent sx={{
        height: '150px',
        margin: '50px auto',
        background: '#211C1D',
        position: 'relative',
        padding: '20px',
        borderTop: 'calc(20px / 3) solid #56453E',
        fontFamily: 'Raleway, sans-serif',
      }}>
        {/* <div className="profile_pic-wrap"> */}
        <CardContent sx={{
        width: '110px',
        height: '110px',
        background: '#e3e3e3',
        top: '0',
        left: '50%',
        padding: '5px',
        position: 'absolute',
        marginLeft: 'calc(-100px / 2)',
        top: 'calc(-60px / 2)',
        borderRadius: '50%',
        overflow: 'hidden',
      }}>

          <img src="https://scontent-yyz1-1.cdninstagram.com/t51.2885-19/s320x320/12543142_446352545560748_362768810_a.jpg" alt="Profile" />
          </CardContent>
        {/* </div> */}

        {/* <div className="info-wrap"> */}
        <CardContent sx={{ textAlign: 'center' }}>
          {/* <h1 className="user-name">{data.user.username}</h1>
          <p>{data.user.name}</p> */}
          <Typography 
            variant="h1" 
            className="user-name"
            sx={{ textAlign: 'center', marginTop: 'calc(150px / 2)' }}
          >
            {data.user.username}
          </Typography>

          <Typography variant="body1">
            {data.user.name}
          </Typography>
          </CardContent>
        {/* </div> */}
        </CardContent>
      // </div>
    ) : (
      <p>Loading user data...</p>
    )}
  </Card>

  {/* Second Row - Three Cards in a Row */}
  <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}> {/* Flexbox for centered row layout */}
        <Card sx={{ maxWidth: 400 }}>
        <Link to="/package-style" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div" paddingBlock={"15px"} paddingInline={"15px"}>
              Our Packages
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} paddingBlock={"15px"} paddingInline={"15px"}>
            Choose from a variety of haircut packages tailored to fit your needs. 
            Whether it's a quick trim or a full grooming session, we've got you covered with the best deals and premium service.
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
        </Card>

        <Card sx={{ maxWidth: 400 }}>
        <Link to="/hair-style" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div"paddingBlock={"20px"} paddingInline={"20px"}>
              Our Haircut Style
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}paddingBlock={"20px"} paddingInline={"20px"}>
            Explore our diverse range of haircut styles, from classic cuts to modern trends. 
            Our expert barbers are here to help you find the perfect look that suits your personality and lifestyle.
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
        </Card>

        <Card sx={{ maxWidth: 400 }}>
        <Link to="/new-booking" style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="div" paddingBlock={"20px"} paddingInline={"20px"} >
              Book your slot
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} paddingBlock={"20px"} paddingInline={"20px"}>
            Avoid the wait! Book your appointment with just a few clicks. 
            Choose your preferred barber, time, and service to ensure a seamless grooming experience
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
        </Card>
      </div>
</div>
  
  );
};

export default CustomerProfile;
