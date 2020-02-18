import React from 'react';
import './App.css';

type Board = number[][];

interface Submarine {
    direction: string,
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
  const { submarines } = props;
  return (
      <div className="sub-div">
        {
          submarines.map(
            (sub,index)=>(
              <div > 
                <img src={"https://robohash.org/"+sub.id}></img>
              </div>
            )
          )
        }
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
      <div className="sub-div">
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

const submarins_array=[
  { direction: 'horizontal', length: 4, id: 1 },
  { direction: 'horizontal', length: 2, id: 2 },
  { direction: 'vertical',   length: 2, id: 3 },
  { direction: 'vertical',   length: 3, id: 4 },
  { direction: 'vertical',   length: 1, id: 5 },
]
function App() {
  return (
    <div className="App">
      <div>
        <div>
          <Sidebar submarines={submarins_array} />
        </div>
        <div>
          <MainGrid board={initialBoard} />
        </div>
      </div>
    </div>
  );
}

export default App;
