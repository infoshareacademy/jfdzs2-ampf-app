import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import './header.style.css';

class Menu extends PureComponent {
    render() {
        return (
            <Navbar inverse collapseOnSelect className="navbarContainer">
                <Navbar.Header className="navbarHeader">
                    <Navbar.Brand>
                        <p>Feed Me!</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse className="navbarCollapse">
                    <Nav>
                        <NavItem eventKey={1}>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/Recipes">Recipes</Link>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Link to="/Favourites">Favourites</Link>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <Link to="/Search">Search</Link>
                        </NavItem>
                        <NavItem eventKey={5}>
                            <Link to="/LogIn">Log In</Link>
                        </NavItem>
                        <NavItem eventKey={6}>
                            <Link to="/SignUp">Sign Up</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;