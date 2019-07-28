import React from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NarBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Error from './components/Error';


function App() {
  return (
    /* react.fragment works as parent container
    navbar set to appear in every page  
    route set to switch between files */
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component ={ProductList}/>
        <Route path="/details" component ={Details}/>
        <Route path="/cart" component ={Cart}/>
        <Route component ={Error}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
