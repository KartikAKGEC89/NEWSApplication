import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
background: url(https://www.nbcstore.com/cdn/shop/collections/DesktopBanner-MSNBC_936df3a8-6f91-4209-8169-526ba240e411_1400x.jpg?v=1689134149);
width:100%;
height:25vh;
`

const Banner = () => {
  return (
    <Image>
       <Typography>NEWS</Typography>   
    </Image>
  )
}

export default Banner
