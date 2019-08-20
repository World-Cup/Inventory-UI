import React, { useState, useEffect } from 'react'
import './Style.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';



const theme = createMuiTheme()




export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false)
	return  (
		<MuiThemeProvider theme={theme}>
			<NavBar/>
			<Router>
				<Switch>
                    <Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	)
}