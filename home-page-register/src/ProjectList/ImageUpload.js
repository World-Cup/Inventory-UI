import React, { Component } from 'react'

class componentName extends Component {
    state = {
        uploading: false,
        images: []
    }
    onChange = e => {
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })
    }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default componentName