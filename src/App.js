import React from 'react';
import Tictactoe from './component/Tictactoe'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the tic-tac-toe game!</p>
        <Tictactoe />
      </header>
    </div>
  );
}

export default App;
