import React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import styled from '@emotion/styled';
import { Button } from '@mui/material';


   const Component = styled(Box)`
    width:400px;
    margin:auto;
    shadow: 5px 2px 5px 2px rgb(0 0 0/1)
    `;

    const Image = styled('img')({
        width: 400,
        margin: 'auto',
        display: 'flex',
        padding: ' 50px 0 0 '
    });


const imageURL = 'https://m.media-amazon.com/images/I/81FVkuV+yEL.png';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'Field in current use';
    }

    return 'Not in current use';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const Contact = () => {
  return (
    
    <Component>
      <Image src={imageURL} alt='login' /> 
      <Box component="form" autoComplete="off">
      <FormControl sx={{ margin: '10px' }}>
      <OutlinedInput placeholder="Please enter text" />
      <MyFormHelperText />
      </FormControl>  
      </Box>
      <Box component="form" autoComplete="off">
      <FormControl sx={{ margin: '10px' }}>
      <OutlinedInput placeholder="Please enter text" />
      <MyFormHelperText />
      </FormControl>  
      </Box>
      <Box component="form" autoComplete="off">
      <FormControl sx={{ margin: '10px' }}>
      <OutlinedInput placeholder="Please enter text" />
      <MyFormHelperText />
      </FormControl>  
      </Box>
      <Button variant="contained" sx={{ margin: '10px' }} >Send</Button>
      </Component>
  )
}

export default Contact;                   