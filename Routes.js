import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';

import Main from '';
import Signup from '';
import Login from '';
import ProductList from '';
import ProductDetails from '';
import Cart from '';

class Routes extends Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path="/main" component={Main} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/productlist" component={ProductList} />
                        <Route exact path="/productdetails" component={ProductDetails} />
                        <Route exact path="/cart" component={Cart} />
                    </Switch>
                </Router>

        )
    }
}

export default Routes;
