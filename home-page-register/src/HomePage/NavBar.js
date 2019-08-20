import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
const NavBar = () => {
    return (
      <div>
         <nav className= "nav-wrapper grey darken-3">
            <Link to= '/' className ='brand-logo left'>
                     E-Inventory
            </Link>
             <div className = 'conatiner'>
                 <SignedInLinks/>
                 <SignedOutLinks />
             </div>
         </nav>
      </div>
    )

}

export default NavBar;

