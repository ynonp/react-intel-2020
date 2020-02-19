import React, {useState} from 'react';
import './App.css';
import { useDrag, useDrop } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Demo from "./performance_demo";


type Board = number[][];

type Direction = "vertical" | "horizontal";
type MyDragItem = {
    type: string,
    data: Submarine,
}

interface Submarine {
    direction: Direction,
    length: number,
    id: number,
    name: string,
}

function Submarine(props: { submarine: Submarine }) {
    const { submarine } = props;
    const [_, drag] = useDrag({
        item: { type: 'submarine', data: submarine },
    });

    return (
        <img
            src={`https://robohash.org/${submarine.name}?size=50x50`}
            ref={drag}
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

function GridCell(props: { rowIndex: number, columnIndex: number, value: number }) {
    const { rowIndex, columnIndex, value } = props;
    const [collectedProps, drop] = useDrop({
        accept: 'submarine',
        collect(monitor) {
            return { background: monitor.isOver() ? 'lightblue' : 'white' };
        },
        drop(item: MyDragItem, monitor) {
            alert(`${item.data.name} -> ${rowIndex}, ${columnIndex}`);
        }
    });

    const style = {
        background: collectedProps.background,
    };

    return (
        <td ref={drop} style={style}>{value !== 0 ? value : ''}</td>
    );

}

type SetBoardFn = (_: Board) => void;
function MainGrid(props: { board: Board, setBoard: SetBoardFn }) {
    const { board, setBoard } = props;

    return (
      <div className="grid">
          {board.map((row, rowIndex) => (
              <tr>
                  {row.map((item, columnIndex) => (
                      <GridCell
                          rowIndex={rowIndex}
                          columnIndex={columnIndex}
                          value={item}
                      />
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
        <DndProvider backend={Backend}>
            <div className="App">
                <Sidebar />
                <MainGrid board={board} setBoard={setBoard} />
            </div>
        </DndProvider>
    );
}

export default Demo;
