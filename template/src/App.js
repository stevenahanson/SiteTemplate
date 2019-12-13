import React, { Component } from 'react';

import Backdrop from './components/Backdrop/Backdrop';
import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';

class App extends Component {
  state = {
    sidebarOpen: false
  };

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
  };

  render() {
    let sidebar;
    let backdrop;

    if(this.state.sidebarOpen) {
      sidebar = <Sidebar/>
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar sidebarClickHandler={this.sidebarToggleClickHandler}/>
        {sidebar}
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;