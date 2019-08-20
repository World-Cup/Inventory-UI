import React, { Component } from 'react'
import Notification from './Notification';
class Dashboard extends Component {
  render() {
    return (
      <div className = 'dashboard conatiner'>
          <div className ='row'>
              <div className ='col s12 m6'>Project List</div>
              <dic className= 'col s12 m5 offset-m1'>
                <Notification />
              </dic>
          </div>
      </div>
    )
  }
}

export default Dashboard
