import React from 'react';
import logo from './img/restaurant_banner.jpg';

export class HeaderBar extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <img src={logo} alt="logo"/>
        </nav>
      </header>
    );
  }
}
export default HeaderBar;
