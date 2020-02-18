import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

type Board = number[][];

type Direction = "vertical" | "horizontal";

interface Submarine {
    direction: Direction,
    length: number,
    id: number,
    name: string,
}

function Submarine(props: { submarine: Submarine }) {
    const { submarine } = props;
    return (
        <img
            src={`https://robohash.org/${submarine.name}?size=50x50`}
        />
    )
}

function createSubmarine(
    direction: Direction, length: number, name: string, id=-1): Submarine {
    return {
        direction,
        length,
        id,
        name,
    };
}

function Sidebar(props: {}) {
    const submarines = [
        createSubmarine('horizontal', 2, 'Paris'),
        createSubmarine('horizontal', 4, 'New York'),
        createSubmarine('vertical', 3, 'Barcelona'),
        createSubmarine('vertical', 5, 'London'),
    ];
    return (
        <div className="sidebar">
            {submarines.map(sub => (
                <Submarine submarine={sub} />
            ))}

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
