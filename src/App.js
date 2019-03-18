import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Homepage from './components/homepage'
import { Route, withRouter, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Login from './components/login'
import Register from './components/register'
import Products from './components/productlist'
import Cookies from 'universal-cookie'
import ManageProduct from './components/admin/manageproduct'
import ProductDetail from './components/productdetail'
import { keepLogin } from './1.actions'
import './support/globalsupport.css'

const objCookie = new Cookies()

class App extends Component {

  componentDidMount() {
    var cookie = objCookie.get('userData')
    if (cookie !== undefined) {
      this.props.keepLogin(cookie)
    }
}
  render() {
    return (
      <div>
      <NavBar/>
      <Switch>
      <Route path='/' component={Homepage} exact/>
      <Route path='/login' component={Login} exact/>
      <Route path='/register' component={Register} exact/>
      <Route path='/product-list' component = {Products} exact/>
      <Route path='/manage-product' component = {ManageProduct} exact/>
      <Route path='/product-detail/:id' component = {ProductDetail} exact/>
      </Switch>
      </div>
    );
  }
}

export default withRouter (connect (null, {keepLogin})(App));

