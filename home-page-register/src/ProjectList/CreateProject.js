import React, { useState, Component } from 'react';
import "./Index.css"
class CreateProject extends Component {
	state = {
		title: '', content: ''
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
  render(){
	return (
		<div className="container">
            <form onSubmit = {this.handleSubmit}>
                <h5 className ="grey-text text-darken-3">Create New Entry</h5>
                <div className ="input-field">
                    <label htmlFor="title">Name </label>
                    <input 
                        type ="text" 
                        id= "title" 
                        onChange={this.handleChange}
                    />
                </div>
                <div className ="input-field">
                    <label htmlFor="content">Project Content</label>
                    <input 
                        type ="text" 
                        id= "content" 
                        onChange={this.handleChange}
                    />
                </div>
                <div className ="input-field">
                    <button className ="btn pink lighten-1 z-depth-0">Submit</button> 
                </div>
            </form>
	  	</div>
	)
}
}
export default CreateProject;
