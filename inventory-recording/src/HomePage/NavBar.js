// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

// import LogIn from './Login'
// import Register from './Register';
// import { Link} from 'react-router-dom';
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//     <AppBar position="static">
//         <Toolbar>
//         <Typography variant="h6" className={classes.title}>
//             E-Commerce
//         </Typography>
//             <Link to= '/' component={Register}>
//                 Register
//             </Link>
//             <Link to="/cart" className="ml-auto"> 
//                 LogIn
//             </Link>
//         </Toolbar>
//     </AppBar>
//     </div>
//   );
// }
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Navbar} from "reactstrap";
import {ButtonContainer, Title} from '../components/Button';
// import {Title} from './Button';
export default class NavBar extends Component {
  render() {
      return (
      <Navbar color="dark" dark fixed="top" expand="sm">
          <Link to='/'>
              <Title>Home</Title>
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
      )
  }
}