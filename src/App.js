import React from 'react';
import './App.css';
import Metronome from './containers/Metronome';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', background: '#161020' }}>
      <Metronome />
    </div>
  );
}

export default App;
