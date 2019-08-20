import React, { useState, useEffect } from 'react'
import './HomePage/Style.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './HomePage/Home'
import NavBar from './HomePage/NavBar';
import Login from './HomePage/Login';
import ProjectDetails from './ProjectList/ProjectDetails';
import Dashboard from './Dashboard/Dashboard';
import Register from './HomePage/Register';


export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)
	return  (
		<BrowserRouter>
      <div className = "App">
          <NavBar/>
          <Switch>
            <Route exact path ='/' component ={Dashboard}/>
            <Route path ='/project/:id' component ={ProjectDetails}/>
            <Route path ='/register' component ={Register}/>
            <Route path ='/login' component ={Login}/>
          </Switch>
      </div>
    </BrowserRouter>
	)
}
