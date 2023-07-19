import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { API } from '../../Api/api.js';

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

      const signupInitialValues = {
    name: '',
    username: '',
    password: ''
};

const Login = () => {
    const imageURL = 'https://m.media-amazon.com/images/I/81FVkuV+yEL.png';
    
    const [account, toggleaccount] = useState('Login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [Error, setError] = useState('');

    const togglesignup = () => {
        account === 'signup' ? toggleaccount('Login') : toggleaccount('signup')
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setError('');
            setSignup(signupInitialValues);
            toggleaccount('Login')
        } else {
            setError('Something went wrong');
        }
    }

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
                  <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Name"  />
                  <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Username" />
                  <TextField  variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Password"  />
                  <LoginButton variant="text" onClick={() => togglesignup()}>Already have an account</LoginButton>
                  <SignButton variant="contained" onClick={() => signupUser()}>SignUp</SignButton> 
                      {Error && <Typography> { Error } </Typography>}    
              </Wrapper>
              }
          </Box>    
    </Component>
  )
}

export default Login
