import React, {PureComponent} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

import './header.style.css';
import FeedMeLogo from '../../utils/images/nav-page-logo.svg';

class Header extends PureComponent {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="navbarContainer">
        <Navbar.Header className="navbarHeader">
          <Navbar.Brand className="navbarLogoContainer">
            <img
              src={FeedMeLogo}
              alt="FeedMeLogo"
            />
            <p className="navbarHeaderBrandName">feed me!</p>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse className="navbarCollapse">
          <Nav className="navbarMenu">
            <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/Recipes">
              <NavItem eventKey={2}>Recipes</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/Favourites">
              <NavItem eventKey={3}>Favourites</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/Search">
              <NavItem eventKey={4}>Search</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/LogIn">
              <NavItem eventKey={5}>Log In</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to="/SignUp">
              <NavItem eventKey={6}>Sign Up</NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;