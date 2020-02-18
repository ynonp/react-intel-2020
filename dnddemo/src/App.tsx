import React from 'react';
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
function Sidebar(/*props: { submarines: Submarine[] }*/) {
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
  const { board } = props;

  return (
      <div>
        <table>
          {
            board.map((row) => (<tr> {row.map((cell) => (
             <td className="gridcell">{cell != 0 ? cell : ''}</td>
              )
              )}</tr>))
          }
        </table>
      </div>
  )
}

const initialBoard= [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]



  function App() {
  return (
    <div>
      <table>
        <tr>
          <td><Sidebar></Sidebar></td>
          <td><MainGrid board={initialBoard}></MainGrid></td>
        </tr>
      </table>
      
    </div>
  );
}

export default App;
