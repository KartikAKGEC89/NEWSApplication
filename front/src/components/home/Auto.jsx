import React from 'react';
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography, Button} from '@mui/material';


  const Auto = () => {
    return (
      <Card sx={{ maxWidth: '45vw', maxHeight: '45vh', marginLeft: '2vw', marginTop: '2vh'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: 'red' }} aria-label="recipe">
              AAJ TAK
            </Avatar>
          }
          title="AAJ TAK"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://i.ytimg.com/vi/Iyluevka7Ak/maxresdefault.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Hindi News Live: देश दुनिया की सुबह की 100 बड़ी खबरें | Nonstop 100 | Latest News | Aaj Tak - YouTube
Images may be subject to copyright. Learn More
          </Typography>
          <Button variant="contained">Comment</Button>
        </CardContent>
      </Card>
    )
  }


export default Auto;
