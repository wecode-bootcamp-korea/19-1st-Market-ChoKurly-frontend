import React, { Component } from 'react';
import './Submenu.scss';

class Submenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sub-menu-list">
        <ul className="sub-menu">
          <li>사탕</li>
          <li>초콜렛</li>
          <li>초콜렛</li>
        </ul>
      </div>
    );
  }
}

export default Submenu;
