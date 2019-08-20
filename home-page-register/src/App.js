import React, { useState, useEffect } from 'react'
import './HomePage/Style.css';
import { BrowserRouter} from 'react-router-dom'
import Home from './HomePage/Home'
import NavBar from './HomePage/NavBar';
import Login from './HomePage/Login';
import Register from './HomePage/Register';


export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)
	return  (
		<BrowserRouter>
        <NavBar/>
      <div className = "App">
        
      </div>
    </BrowserRouter>
	)
}
