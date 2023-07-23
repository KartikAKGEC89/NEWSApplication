import React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { API } from '../../Api/api.js';

import { useNavigate } from 'react-router-dom';

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

   const loginInitialValues = {
    username: '',
    password: ''
};

const Login = ( { isUserAuthenticated } ) => {
    const imageURL = 'https://m.media-amazon.com/images/I/81FVkuV+yEL.png';
    
    const [account, toggleaccount] = useState('Login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setlogin] = useState(loginInitialValues);
    const [Error, setError] = useState('');

    const navigate = useNavigate();

    const togglesignup = () => {
        account === 'signup' ? toggleaccount('Login') : toggleaccount('signup')
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onValueChange = (e) => {
        setlogin({ ...login, [e.target.name]: e.target.value });
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            setError('');
            setSignup(signupInitialValues);
            toggleaccount('Login')
        } else {
            return (
                <div>
                    Error
                </div>
            )
           
        }
    }

    const loginUser = async () => {
        let response = await API.userLoginup(login);
        if (response.isSuccess) {
            setError('');


            
            sessionStorage.setItem('token', `Bearer ${response.data.token}`);

            
            isUserAuthenticated(true);
            setlogin(loginInitialValues);
            navigate('/');

        } else {
            return (
                <div>
                    Error
                </div>
            )
           
        }
    }

  return (
      <Component>
          <Box>
              <Image src={imageURL} alt='login' /> 
              {  account === 'Login' ?
                <Wrapper>
                  <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label="Username" />
                  <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label="Password" />
                  <SignButton variant="text" onClick={() => togglesignup()}>Create an account</SignButton>
                  <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton> 
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
