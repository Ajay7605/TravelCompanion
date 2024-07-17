// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { Paper,Typography,useMediaQuery } from '@material-ui/core';
// import locationOutlinedIcon from '@material-ui/icons/Location';
// import Rating from '@material-ui/lab';
// import useStyles from './styles';

// const Map = ()=>{
//     const classes = useStyles();
//     const isMobile = useMediaQuery('(min-width:600px)');
//     const coordinates = { lat: 0, lng: 0};

//     return(
//         <div>
//             <div className={classes.mapContainer}>
//                 <GoogleMapReact 
//                 bootstrapURLKeys={{key:''}}
//                 defaultCenter={coords}
//                 center={coordinates}
//                 defaultZoom={14}
//                 margin={[50,50,50,50]}
//                 options={''}
//                 onChange={''}
//                 onChildClick={''}>

//                 </GoogleMapReact>
//             <div/>
                

            
//         </div>
//     );
// }

// export default Map;


import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');
  
  // AIzaSyAq4JQw5FEQXLi6cP0fdLERcaPSiye2VDo(new2)
  // AIzaSyBCMG7pm3WRtkYstTqQkf5zLD50mSqYCpQ(old)
  // AIzaSyC77ir-ECtwk_txTHyXU3mdFPHjdD_Zeik(new1)

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}} // Provide options object here
        onChange={(e) => {
          // console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ne: e.marginBounds.ne,sw:e.marginBounds.sw});
        }} // Provide onChange callback function here
        onChildClick={(child) => setChildClicked(child)} // Provide onChildClick callback function here
      >
        {/* Add any child components or markers here */}

        {places?.map((place,i)=>(
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key = {i}
          >
            {
              !isDesktop ? (
                <LocationOnOutlinedIcon color='primary' fontSize='large'/>

              ):(
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                    {place.name}
                    </Typography>
                    <img 
                      className={classes.pointer}
                      src = {place.photo ? place.photo.images.large.url : 'https://www.freepik.com/free-photos-vectors/placeholder-restaurant'}
                      alt={place.name}
                    />
                    <Rating size='small' value={Number(place.rating)} readOnly />
                </Paper>

              )

            }

          </div>

        ))}
        


      </GoogleMapReact>
    </div>
  );
};

export default Map;
