import React, { useState, useCallback, useEffect } from "react";
import _ from "lodash";
import { useDrag, useDrop } from "react-dnd";
import "./App.css";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import {
  Dir,
  addSubmarineToBoard,
  submarineCoordinates,
  iconFor
} from "./submarines";

const BoardSquare = React.memo(function BoardSquare({
  cell,
  rowIndex,
  colIndex,
  notifyHover,
  hover,
  handleDrop
}) {
  const [collectedProps, drop] = useDrop({
    accept: "submarine",
    hover(item, monitor) {
      // console.log("HOVER", monitor.getClientOffset());
      notifyHover(item, rowIndex, colIndex);
    },
    drop(item, monitor) {
      console.log("DROP", item);
      handleDrop(item, { rowIndex, colIndex });
    }
  });

  return (
    <td className={`cell ${hover ? "hovering" : ""}`} ref={drop}>
      {iconFor(cell)}
    </td>
  );
});

function MainGrid(props) {
  const [hover, setHover] = useState({ key: '', items: new Set() });
  const { board, setBoard, isDragging } = props;

  useEffect(function() {
    if (isDragging === false) {
      setHover({ key: '', items: new Set() });
    }
  }, [isDragging]);

  function notifyHover(item, rowIndex, colIndex) {
    const key = `${item.direction}|${item.length}|${rowIndex}|${colIndex}`
    if (hover.key !== key) {
      setHover({
        items: new Set(submarineCoordinates(item, rowIndex, colIndex)),
        key,
      });
    }
  }

  const handleDrop = useCallback(
    function handleDrop(who, { rowIndex, colIndex }) {
      setBoard(addSubmarineToBoard(who, board, rowIndex, colIndex));
    },
    [board, setBoard]
  );

  return (
    <table>
      {board.map((row, rowIndex) => (
        <tr className="row">
          {row.map((cell, colIndex) => (
            <BoardSquare
              key={`${rowIndex},${colIndex}`}
              rowIndex={rowIndex}
              colIndex={colIndex}
              cell={cell}
              hover={hover.items.has(`${rowIndex},${colIndex}`)}
              handleDrop={handleDrop}
              notifyHover={notifyHover}
            />
          ))}
        </tr>
      ))}
    </table>
  );
}

const initialBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function Submarine(props) {
  const { image, setIsDragging } = props;

  const [collectedProps, dragRef] = useDrag({
    item: { type: "submarine", ...props },
    begin(monitor) {
      setIsDragging(true);
    },
    end(item, monitor) {
      setIsDragging(false);
    }
  });

  return (
    <div className="submarine-icon" ref={dragRef}>
      <img src={image} />
    </div>
  );
}

function Sidebar(props) {
  const submarines = [
    {
      direction: Dir.horizontal,
      length: 3,
      image: "https://robohash.org/1.png?size=50x50"
    },
    {
      direction: Dir.horizontal,
      length: 5,
      image: "https://robohash.org/2.png?size=50x50"
    },
    {
      direction: Dir.vertical,
      length: 2,
      image: "https://robohash.org/3.png?size=50x50"
    },
    {
      direction: Dir.vertical,
      length: 4,
      image: "https://robohash.org/4.png?size=50x50"
    }
  ];

  const { setIsDragging } = props;
  return (
    <div className="sidebar">
      {submarines.map(sub => (
        <Submarine {...sub} setIsDragging={setIsDragging} />
      ))}
    </div>
  );
}

export default function App() {
  const [board, setBoard] = useState(initialBoard);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <DndProvider backend={Backend}>
      <div className="App">
        <Sidebar setIsDragging={setIsDragging} />
        <MainGrid board={board} setBoard={setBoard} isDragging={isDragging} />
      </div>
    </DndProvider>
  );
}




