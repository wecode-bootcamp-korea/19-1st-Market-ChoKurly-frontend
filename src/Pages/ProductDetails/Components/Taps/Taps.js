import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { tapsData } from './TapsData';
import './Taps.scss';

class Taps extends Component {
  constructor() {
    super();
    this.state = {
      toggleStatus: true,
    };
  }

  toggle = () => {
    this.setState({
      toggleStatus: !this.state.toggleStatus,
    });
  };

  render() {
    return (
      <div className="tap-group">
        <ul>
          {tapsData.map(ele => {
            return (
              <li
                key={ele.id}
                className={
                  (this.state.toggleStatus ? 'li-off' : 'li-on') + ' list'
                }
              >
                <span className="link-name">
                  <Link to="{ele.link}" onMouseOver={this.toggle}>
                    {ele.content}
                  </Link>
                </span>
                <span className="how-many">{ele.num}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Taps;
