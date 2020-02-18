import React from 'react';
import logo from './logo.svg';
import './App.css';

type Board = number[][];

interface Submarine {
    direction: 'horizontal' | 'vertical',
    length: number,
    id: number,
}

/*
    submarines: [
      { direction: 'horizontal', length: 4, id: -1  },
      { direction: 'horizontal', length: 2, id: -1, },
      { direction: 'vertical', length: 2, id: -1,   },
      { direction: 'vertical', length: 3, id: -1    },
    ]
 */
function Sidebar(props: { submarines: Submarine[] }) {
    return (
        <div></div>
    )
}

/**
 * [
 *   [0, 0, 0, 0, 1, 1],
 *   [0, 0, 0, 2, 0, 0],
 *   [0, 0, 0, 2, 0, 0],
 * ]
 */
function MainGrid(props: { board: Board }) {
  return (
      <div></div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
