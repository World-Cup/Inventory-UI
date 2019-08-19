import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

class SideNavPage extends React.Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
        <div>

        </div>
    )
  }
}
export default SideNavPage;