import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container, Paper, CircularProgress } from '@material-ui/core';
  

const LandingPage = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setUserLocation({ lat: userLat, lng: userLng });
      });
    }
  }, []);

  if (!userLocation) {
    return <CircularProgress />;
  }

  return (
    <Container>
      <Paper elevation={3} style={{ width: '80%', height: '400px', margin: '20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <GoogleMapReact
          center={userLocation}
          defaultZoom={14}
        >
        </GoogleMapReact>
      </Paper>
    </Container>
  );
}

export default LandingPage;