import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup';
import Signupfin from './Pages/Signup/SignupFin/SignupFin';
import Login from './Pages/Login/Login';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';

import './Styles/common.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signupfin" component={Signupfin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/productdetails" component={ProductDetails} />
          <Route exact path="/productdetails/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/cart/:id" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
