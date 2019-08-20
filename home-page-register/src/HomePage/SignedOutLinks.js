import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
const SignedInLinks = () => {
   return (
        <div>
            <ul className='right '>
                <li>
                    <NavLink to='/'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Login</NavLink>
                 </li>
            </ul>
        </div>
   ) 
}
export default SignedInLinks;