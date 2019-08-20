import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
const SignedInLinks = () => {
   return (
        <div>
            <ul className='right '>
                <li>
                    <NavLink to='/'>Home page</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Log Out</NavLink>
                 </li>
                <li>
                    <NavLink to='/' className='btn btn-floating pink lighten-1'>AA</NavLink>
                </li>
            </ul>
        </div>
   ) 
}
export default SignedInLinks;