import React, { Component } from 'react';
import './App.css'


class Register extends Component {
	state ={
		name:"", email: '', Password:""
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) =>{
		e.preventdefault();
		console.log(this.state)
	}
  render() {

	return (
		<div className="wrapper">
			<div className="form-wrapper">
				<h4>Create Account</h4>
				<form onSubmit={this.handleSubmit} noValidate>
					<div className="Name">
						<label htmlFor="Name">Name</label>
						<input
							id ="name"
							placeholder="Name"
							onChange ={this.handleChange}
						/>
					</div>
					<div className="email">
						<label htmlFor="email">Email</label>
						<input
							id="email" name="email" placeholder="Email"
							autoComplete="off" 
							onChange ={this.handleChange}
						/>
					</div>
					<div className="password">
						<label htmlFor="password">Password</label> 
						<input
							id="assword" name="Password" placeholder="Password"
							placeholder="Password"
							type="password"
							onChange={this.handleChange}
						/>
					</div>
					<div className="createAccount">
						<button type="submit">Create Account</button> 
					</div>
					<div className="loginAccount">
						<button type="submit">Go back to Login</button>
					</div>
				</form>
			</div>
	  	</div>
	)
  }
}

export default Register;

