import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type Board = number[][];

interface Submarine {
    direction: 'horizontal' | 'vertical',
    length: number,
    id: number,
}

function Sidebar(props: {}) {
    const submarines = [
        { direction: 'horizontal', length: 4, id: -1  },
        { direction: 'horizontal', length: 2, id: -1, },
        { direction: 'vertical', length: 2, id: -1,   },
        { direction: 'vertical', length: 3, id: -1    },
    ];
    return (
        <div className="sidebar"></div>
    )
}

/**
 * [
 *   [0, 0, 0, 0, 1, 1],
 *   [0, 0, 0, 2, 0, 0],
 *   [0, 0, 0, 2, 0, 0],
 * ]
 */
type SetBoardFn = (_: Board) => void;
function MainGrid(props: { board: Board, setBoard: SetBoardFn }) {
    const { board, setBoard } = props;

    return (
      <div className="grid">
          {board.map((row, rowIndex) => (
              <tr>
                  {row.map((item, columnIndex) => (
                      <td>{item !== 0 ? item : ''}</td>
                  ))}
              </tr>
          ))}
      </div>
  )
}
const initialBoard = [
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

function App() {
    const [board, setBoard] = useState(initialBoard);
  return (
    <div className="App">
        <Sidebar />
        <MainGrid board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
