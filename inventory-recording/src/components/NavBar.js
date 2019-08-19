import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Navbar} from "reactstrap";
import {ButtonContainer, Title} from './Button';
// import {Title} from './Button';
export default class NarBar extends Component {
    render() {
        return (
        <Navbar color="dark" dark fixed="top" expand="sm">
            <Link to='/'>
                <Title>Inventory</Title>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link"> 
                        Products
                    </Link>
                </li>  
            </ul>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/Inventory" className="nav-link"> 
                        Add Products
                    </Link>
                </li>  
            </ul>
            <Link to="/cart" className="ml-auto"> 
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span> My Cart
                </ButtonContainer>
            </Link>
        </Navbar>
        );
    }
}

