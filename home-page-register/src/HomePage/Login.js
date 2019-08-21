import React, { useState, Component } from 'react';
import './App.css'

class Login extends Component {
	state = {
		email: '', Password:""
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) =>{
		e.preventDefault();
		console.log(this.state)
	}
  render(){
	return (
		<div className="wrapper">
			<div className="form-wrapper">
				<h4> Sign In Account</h4>
				<form onSubmit={this.handleSubmit} noValidate>
					<div className="email">
						<label htmlFor="email">Email</label>
						<input
						id="email" name="email" placeholder="Email"
						autoComplete="off" 
						// value={email} 
						onChange= {this.handleChange}
						/>
					</div>
					<div className="password">
						<label htmlFor="password">Password</label> 
						<input
							id="Password" name="Password" placeholder="Password"
							placeholder="Password"
							type="password"
							onChange={this.handleChange}
						/>
					</div>
					<div className="createAccount">
						<button type="submit">Sign In</button>
					</div>
					<div className="loginAccount">
						<button type="submit">Register</button>
					</div>
				</form>
			</div>
	  	</div>
	)
}
}
export default Login;
