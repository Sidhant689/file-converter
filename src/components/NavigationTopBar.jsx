// NavigationTopBar.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as bs from 'react-bootstrap';

const NavigationTopBar = () => {
  return (
    <bs.Navbar expand="lg" className="" style={{backgroundColor:'#333333'}}>
      <bs.Container>
        <bs.Navbar.Brand as={Link} to="/" className='brandName'>
          CMF
        </bs.Navbar.Brand>
        <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <bs.Navbar.Collapse id="basic-navbar-nav">
          <bs.Nav className="me-auto">
            <bs.NavLink as={NavLink} className="nav_item" to="/"> {/* Use NavLink with exact prop */}
              Home
            </bs.NavLink>
            <bs.NavLink as={NavLink} className="nav_item" to="/about">
              About
            </bs.NavLink>
            <bs.NavLink as={NavLink} className="nav_item" to="/contact">
              Contact
            </bs.NavLink>
            <bs.NavDropdown className="nav_item" title="Dropdown" id="basic-nav-dropdown">
              <bs.NavDropdown.Item as={Link} to="/action/3.1">
                Action
              </bs.NavDropdown.Item>
              <bs.NavDropdown.Item as={Link} to="/action/3.2">
                Another action
              </bs.NavDropdown.Item>
              <bs.NavDropdown.Item as={Link} to="/action/3.3">
                Something
              </bs.NavDropdown.Item>
              <bs.NavDropdown.Divider />
              <bs.NavDropdown.Item as={Link} to="/action/3.4">
                Separated link
              </bs.NavDropdown.Item>
            </bs.NavDropdown>
          </bs.Nav>
        </bs.Navbar.Collapse>
      </bs.Container>
    </bs.Navbar>
  );
};

export default NavigationTopBar;
