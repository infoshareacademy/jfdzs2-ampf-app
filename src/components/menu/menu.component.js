import React, {PureComponent, Fragment} from 'react';
import {Link} from 'react-router-dom';

class Menu extends PureComponent {

    render() {
        return (
            <Fragment>
                <Link to="/">Home</Link>
                <Link to="/Recipes">Recipes</Link>
                <Link to="/Favourites">Favourites</Link>
                <Link to="/Search">Search</Link>
                <Link to="/LogIn">Log In</Link>
                <Link to="/SignUp">Sign Up</Link>
            </Fragment>
        )
    }
}

export default Menu;