import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Cart extends Component {
  componentDidMount() {
    fetch(`http://10.58.6.70:8000/productdetails/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res.result }));
  }

  render() {
    return <div>hi</div>;
  }
}

export default withRouter(Cart);
