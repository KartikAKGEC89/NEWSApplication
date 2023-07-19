import './App.css';
import React from 'react'
import { Route, Routes, BrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';

/* components */
import Login from './components/Accounts/Login';
import Home from './components/home/home';
import Header from './components/header/Header';


const PrivateRoute = ( { isAuthenticated, ...props}) => {
  return isAuthenticated ?
    <>
    <Header />
    <Outlet />
    </>
    : <Navigate replace to='/login' />
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    
      

    <BrowserRouter>
    <div style={{ margintop: 80 }} >
      <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
          </Route>
      </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;
