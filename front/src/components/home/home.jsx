import React from 'react';
import Banner from '../banner/Banner';
import Categories from './Categories';
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12}> <Categories /> </Grid>
        <Grid container item lg={10} xs={12}> POSTS </Grid>
      </Grid>
    </>
  )
}

export default Home;
