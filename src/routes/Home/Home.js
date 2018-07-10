import React, {PureComponent, Fragment} from 'react';
import Menu from '../../components/Header/header.component';
class Header extends PureComponent {

    render() {
        return (
            <Fragment>
                <Menu/>
            </Fragment>
        );
    }
}

export default Header;