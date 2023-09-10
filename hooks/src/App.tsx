import React from 'react';
import './style.scss'
import { Count } from './components/useState/Count/Count';
import { List } from './components/useState/List/List';

function App() {
  return (
    <div className="App">
      {/* <Count/> */}
      <List/>
    </div>
  );
}

export default App;
