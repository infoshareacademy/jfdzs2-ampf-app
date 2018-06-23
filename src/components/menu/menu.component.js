import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

class Menu extends PureComponent {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <p>Feed Me!</p>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <Link to="/" eventKey={1}>
                            Home
                        </Link>
                        <Link to="/Recipes" eventKey={2}>
                            Recipes
                        </Link>
                        <Link to="/Favourites" eventKey={3}>
                            Favourites
                        </Link>
                        <Link to="/Search" eventKey={4}>
                            Search
                        </Link>
                        <Link to="/LogIn" eventKey={5}>
                            Log In
                        </Link>
                        <Link to="/SignUp" eventKey={6}>
                            Sign Up
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;

{/*<NavItem eventKey={1}>*/}
    {/*<Link to="/">Home</Link>*/}
{/*</NavItem>*/}
{/*<NavItem eventKey={2}>*/}
    {/*<Link to="/Recipes">Recipes</Link>*/}
{/*</NavItem>*/}
{/*<NavItem eventKey={3}>*/}
    {/*<Link to="/Favourites">Favourites</Link>*/}
{/*</NavItem>*/}
{/*<NavItem eventKey={4}>*/}
    {/*<Link to="/Search">Search</Link>*/}
{/*</NavItem>*/}
{/*<NavItem eventKey={5}>*/}
    {/*<Link to="/LogIn">Log In</Link>*/}
{/*</NavItem>*/}
{/*<NavItem eventKey={6}>*/}
    {/*<Link to="/SignUp">Sign Up</Link>*/}
{/*</NavItem>*/}