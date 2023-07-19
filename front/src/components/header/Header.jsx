import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Com = styled(AppBar)`
  marginbottom: 20px;
`;

const Container = styled(Toolbar)`
justify-content: center;
& > a {
    padding: 20px;
    color: #000;
    text-decoration: none;
}
`



const Header = () => {
  return (
      <Com>
          <Container>
             <Link to='/'>Home</Link>
             <Link to='/about'>About</Link>
             <Link to= '/contact'>Contact</Link>
             <Link to='/login'>Logout</Link>
          </Container>
    </Com>
  )
}

export default Header
