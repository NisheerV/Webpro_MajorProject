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
        <img style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '9vh'
      }} src="logo.png" alt="logo" />
          <h1>Omega Hire</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/dept' activeStyle>
            Departments
          </NavLink>
          <NavLink to='/emp' activeStyle>
            Employees
          </NavLink>
          <NavLink to='/update' activeStyle>
            Update
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/reg'>Register</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;