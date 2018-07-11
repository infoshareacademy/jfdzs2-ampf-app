import React, {PureComponent, Fragment} from 'react';
import Menu from '../../components/Header/header.component';
import Trends from "../../components/Trends/trends.component";

class Header extends PureComponent {

  render() {
    return (
      <Fragment>
        <Menu/>
        <Trends/>
      </Fragment>
  );
  }
  }

  export default Header;