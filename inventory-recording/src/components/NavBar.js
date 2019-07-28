import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class NarBar extends Component {
    render() {
        return (
        <nav class="navbar navbar-expand-sm navbar-dark px-sm-5 bg-primary ">
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
            <Link to="/cart" className="ml-auto"> 
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span> My Cart
                </ButtonContainer>
            </Link>
        </nav>
        );
    }
}
const Title = styled.h4`
  font-size: 1.4 rem; background: transparent;
  color: var(--mainYellow);
  transition: all 0.25s ease-in-out; 
  &:hover{background: var(--lightBlue); color:var(--mainBlue);}
    &:focus{
    outline: none;
    }
`;