import React from 'react';
import './header-bar.css'

export class HeaderBar extends React.Component {
  render() {
    return (
      <header className="container-fluid">
        <div className="jumbotron">
          <h1>Restaurant POS</h1>
        </div>
      </header>
    );
  }
}
export default HeaderBar;
