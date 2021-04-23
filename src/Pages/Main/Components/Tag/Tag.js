import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Tag.scss';

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
    fetch('/data/mdtags.json')
      .then(res => res.json())
      .then(tagsData => {
        this.setState({
          tags: tagsData,
        });
      });
  }

  handleClick = id => {
    this.setState({
      isClicked: true,
      activeTag: id,
    });

    this.props.history.push(`/main/${id}`);
  };

  render() {
    const { tags } = this.state;
    const { handleClick } = this;

    return (
      <ul className="tags-container">
        {tags.map((tag, index) => {
          return (
            <li
              id={this.state.activeTag === tag.id ? 'clicked' : ''}
              onClick={() => handleClick(tag.id)}
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

export default withRouter(Tags);
