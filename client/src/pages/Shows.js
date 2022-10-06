import * as React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
}from '@mui/material';

import venue from '../assets/shows/27_club.png';


const Shows = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={venue}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          27 Club
        </Typography>
        <Typography variant="body2" color="secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='outlined' >Share</Button>
        <Button size="small" variant='outlined'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Shows;