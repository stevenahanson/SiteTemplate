import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Toolbar from './components/Toolbar/Toolbar';

function App() {
  return (
    <div style={{height: '100%'}}>
      <Toolbar/>
      <Sidebar/>
      <main style={{marginTop: '64px'}}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;