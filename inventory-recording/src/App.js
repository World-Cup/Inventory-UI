import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import CreateProduct from './components/CreateProduct';
import Cart from './components/Cart';
import Error from './components/Error';


function App() {
  return (
    /* react.fragment works as parent container
    navbar set to appear in every page  
    route set to switch between files */
    <React.Fragment>
      <NavBar/>
      <div className="photo-bg">
        <Route exact path="/" component ={ProductList}/>
        <Route path="/details" component ={Details}/>
        <Route path ='/createproduct' component = {CreateProduct}/>
        <Route path="/cart" component ={Cart}/>
        <Route exact path = '/' component ={Error}/>
      </div>     
    </React.Fragment>
  );
}

export default App;
