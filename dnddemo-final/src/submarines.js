import _ from "lodash";


export const Dir = {
  horizontal: 0,
  vertical: 1
};

function addHorizontalSubmarineToBoard(submarine, board, rowIndex, colIndex) {
  const newBoard = _.cloneDeep(board);
  const row = newBoard[rowIndex];
  for (let i = colIndex; i < colIndex + submarine.length; i++) {
    if (row[i] !== 0) {
      return board;
    }
    row[i] = submarine.id;
  }
  return newBoard;
}

function addVerticalSubmarineToBoard(submarine, board, rowIndex, colIndex) {
  const newBoard = _.cloneDeep(board);
  for (let i = rowIndex; i < rowIndex + submarine.length; i++) {
    if (
      newBoard[i] == null ||
      newBoard[i][colIndex] == null ||
      newBoard[i][colIndex] !== 0
    ) {
      return board;
    }
    newBoard[i][colIndex] = submarine.id;
  }
  return newBoard;
}

function horizontalSubmarineCoordinates(submarine, startRow, startCol) {
  return _.range(startCol, startCol + submarine.length).map(
    col => `${startRow},${col}`
  );
}

function verticalSubmarineCoordinates(submarine, startRow, startCol) {
  return _.range(startRow, startRow + submarine.length).map(
    row => `${row},${startCol}`
  );
}

export function submarineCoordinates(submarine, startRow, startCol) {
  if (submarine.direction === Dir.horizontal) {
    return horizontalSubmarineCoordinates(submarine, startRow, startCol);
  } else {
    return verticalSubmarineCoordinates(submarine, startRow, startCol);
  }
}

export function addSubmarineToBoard(submarine, board, row, col) {
  const nextIndex =
    _(board)
      .flatten()
      .max() + 1;
  submarine.id = nextIndex;

  if (submarine.direction === Dir.horizontal) {
    return addHorizontalSubmarineToBoard(submarine, board, row, col);
  } else {
    return addVerticalSubmarineToBoard(submarine, board, row, col);
  }
}

export function iconFor(cell) {
  if (cell === 0) {
    return "";
  }
  return cell;
}

