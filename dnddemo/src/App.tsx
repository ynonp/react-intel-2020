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
function Sidebar(props: { submarines: Submarine[] }) {

  return (
      <div>
      
      </div>
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
  const {board} = props;
  
  return (
      <div>
        <table>
          {
            board.map(
            (row,rowIndex)=>(
              <tr>
                {
                  row.map(
                    (col,colIndex)=>(
                      <td>{col>0?col:null}</td>
                    )
                  )
                }
              </tr>
            )
            ) 
          }
        </table>
      </div>
  )
}

const initialBoard = [
     [0, 0, 0, 0, 0, 0],
     [0, 0, 1, 0, 0, 0],
     [0, 0, 0, 3, 3, 3],
     [0, 2, 0, 0, 0, 0],
     [0, 2, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0],
];

const submarins=[
  { direction: 'horizontal', length: 4, id: 1 } as Submarine,
  { direction: 'horizontal', length: 2, id: 2 } as Submarine,
  { direction: 'vertical',   length: 2, id: 3 } as Submarine,
  { direction: 'vertical',   length: 3, id: 4 } as Submarine,
]
function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Sidebar submarines={submarins} />
        </div>
        <div>
          <MainGrid board={initialBoard} />
        </div>
      </div>
    </div>
  );
}

export default App;
