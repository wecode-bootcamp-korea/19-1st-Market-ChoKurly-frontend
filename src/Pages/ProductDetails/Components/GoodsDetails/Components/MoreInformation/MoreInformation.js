import React, { Component } from 'react';
import { MoreInfoData } from './MoreInfoData';
import './MoreInformation.scss';

class MoreInformation extends Component {
  render() {
    return (
      <article className="more-info-wrapper">
        <table className="extra-info">
          {MoreInfoData.map(ele => {
            return (
              <dl key={ele.id}>
                <dt>{ele.index}</dt>
                <dd>{ele.content}</dd>
              </dl>
            );
          })}
        </table>
      </article>
    );
  }
}

export default MoreInformation;
