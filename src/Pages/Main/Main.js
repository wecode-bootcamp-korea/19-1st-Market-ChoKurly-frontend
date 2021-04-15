import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Slide from './Components/Slide';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <Slide />
      </>
    );
  }
}

export default Main;
