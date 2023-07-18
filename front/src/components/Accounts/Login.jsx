import React from 'react';
import { useState } from 'react';
import { Box,TextField,Button,styled } from '@mui/material';

const Login = () => {
    const imageURL = 'https://m.media-amazon.com/images/I/81FVkuV+yEL.png';

    const [account, toggleaccount] = useState('Login')

   const togglesignup= () => {
    account === 'signup' ? toggleaccount('Login') : toggleaccount('signup')
    }

    const Component = styled(Box)`
    width:400px;
    margin:auto;
    shadow: 5px 2px 5px 2px rgb(0 0 0/0.6)
    `;

    const Image = styled('img')({
        width: 200,
        margin: 'auto',
        display: 'flex',
        padding: ' 50px 0 0 '
    });

    const Wrapper = styled(Box)`
    display:flex;
    flex:1;
    flex-direction:column;
    padding: 25px 35px;
    & > div, & > Button {
        margin-top:20px;
    }
    `;

    const LoginButton = styled(Button)`
    text-transform: none;
    `;

    const SignButton = styled(Button)`
    text-transform: none; 
    `;
  return (
      <Component>
          <Box>
              <Image src={imageURL} alt='login' /> 
              {  account === 'Login' ?
                <Wrapper>
                  <TextField id="standard-basic" label="Username" variant="standard"/>
                  <TextField id="standard-basic" label="Password" variant="standard"/>
                  <SignButton variant="text" onClick={() => togglesignup()}>Create an account</SignButton>
                  <LoginButton variant="contained">Login</LoginButton> 
              </Wrapper>
              :
              <Wrapper>
                  <TextField id="standard-basic" label="Name" variant="standard" />
                  <TextField id="standard-basic" label="Username" variant="standard" />
                  <TextField id="standard-basic" label="Password" variant="standard"/>
                  <LoginButton variant="text" onClick={() => togglesignup()}>Already have an account</LoginButton>
                  <SignButton variant="contained">SignUp</SignButton> 
              </Wrapper>
              }
          </Box>    
    </Component>
  )
}

export default Login
