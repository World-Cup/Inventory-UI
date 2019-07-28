import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Logo from '../logo.svg'
export default class NarBar extends Component {
    render() {
        return (
        <nav class="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary ">
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk  */}
            <Link to='/'>
                <img src={Logo} alt="store" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link"> 
                        Products
                    </Link>
                </li> 
            </ul>
            <Link to="/cart" className="ml-auto"> 
                <button class="btn btn-dark"type="submit"><i className="fas fa-cart-plus"/>My Cart</button>
            </Link>
        </nav>
        );
    }
}
