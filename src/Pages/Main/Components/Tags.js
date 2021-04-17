import React, { Component } from 'react';
import './Tags.scss';

class Tags extends Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      isClicked: false,
      activeTag: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/tags.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(tagsData => {
        this.setState({
          tags: tagsData,
        });
      });
  }

  handleClick = (e, index) => {
    this.setState({
      isClicked: true,
      activeTag: index,
    });
  };

  render() {
    const { tags, isClicked } = this.state;
    const { handleClick } = this;
    return (
      <ul className="tags-container">
        {tags.map((tag, index) => {
          return (
            <li
              id={this.state.activeTag === index ? 'clicked' : ''}
              onClick={e => handleClick(e, index)}
              key={tag.id}
              className="tag"
            >
              {tag.tagName}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Tags;
