import React, { Component } from 'react';
import Logo from './components/logo/component';
import PageWall from './components/wall/page-wall';
import Matrix from './components/matrix/matrix';

class App extends Component {
  
  componentDidCatch (error, info) {
		console.error(error);
		console.info(info);
  }
  
  render() {
    return (
      <div className="App">
        <PageWall />
        <Logo />
        <Matrix />
      </div>
    );
  }
}

export default App;