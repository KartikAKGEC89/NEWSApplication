import React from 'react';
import Banner from '../banner/Banner';
import {  Grid } from '@mui/material';
import Auto from './Auto';

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid container item lg={12} xs={12} sx={{ flexGrow: 1 }}>
          <Auto />  
          <Auto />
          <Auto />  
          <Auto />
          <Auto />  
          <Auto />
          <Auto />  
          <Auto />
        </Grid>
      </Grid>
      <footer style={{ backgroundColor: 'black', color: 'white', textAlign:'center'}}>
        <p style={{ margin: 7.5}}>@NEWS1234 -- version 1.0</p>
         <p style={{ margintop: 7.5, marginBottom: 0}}>    For further details email :- s11kartik2111087@gmail.com</p>
      </footer>
    </>
  )
}

export default Home;
