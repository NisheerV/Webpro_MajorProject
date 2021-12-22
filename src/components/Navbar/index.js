import React from 'react';
import {FaBars} from 'react-icons/fa'; 
import {
  Nav,
  NavLogo,
  NavbarContainer,
  NavLink,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img style={{
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            height: '8vh'
            }} src="logo.png" alt="logo" />
            <h1>Omega Hire</h1>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='/dept' activeStyle>
                Departments
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/emp' activeStyle>
                Employees
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/update' activeStyle>
                Update
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/reg'>Register</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;