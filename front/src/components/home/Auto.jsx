import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, styled } from '@mui/material';

const StyleCard = styled(Card)`
margin: 10px 14px 10px 5px;

`;

const Auto = () => {
    return (
      <>
     <StyleCard sx={{ maxWidth: 350}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="130"
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/ap23194754246610_3-sixteen_nine.jpg?VersionId=_RV4jKekoyGfRZ0E20IhYV6NBsUS9n3d&size=690:388"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            India Vs WestIndies
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Virat Kohli, on Friday, July 21, ended his five-year wait for a hundred in an overseas Test.
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyleCard>
    </>
  )
}

export default Auto;
