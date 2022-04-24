import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/login' activeStyle>
          Login
          </NavLink>
          <NavLink to='/register' activeStyle>
            Register
          </NavLink>
        
         
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Navbar;
