import React from 'react';
import { Card, CardHeader, Avatar, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


  
const Auto = () => {
    
const [open, setOpen] = useState(false);
    return (
      <Card sx={{ maxWidth: '45vw', maxHeight: '70vh', marginLeft: '3vw', marginTop: '2vh'}}>
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
          height="50%"
          image="https://i.ytimg.com/vi/Iyluevka7Ak/maxresdefault.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Hindi News Live: देश दुनिया की सुबह की 100 बड़ी खबरें | Nonstop 100 | Latest News | Aaj Tak - YouTube
Images may be subject to copyright. Learn More
          </Typography>
           <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Thanks For Like 
        </Alert>
      </Collapse>
            <Button disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}>Like</Button>
        </CardContent>
      </Card>
    )
  }


export default Auto;
