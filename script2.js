// data
const boardSize = 3 || prompt("Size");
let turn = "A"; // turn = 'A' | 'B' // represents current playing player and the symbol to be written
function turnFlipper() {
  return turn === "A" ? "B" : "A";
}

function getSymbol(turn) {
  return turn === "A" ? "x" : "o";
}

function checkWin(index, board, size) {
  const isTopLeft = index === 0;
  const isBottomRight = index === size * size - 1;
  const isTopRight = index === size - 1;
  const isBottomLeft = index === size * (size - 1);

  const isInCorner = isTopLeft || isTopRight || isBottomLeft || isBottomRight;
  if (isInCorner) {
    console.log("isInCorner");
    // meant for corners and diagnonals
    // all edges are included (lucky optimization)
    // only diagnoal case are left

    let isDiagnoallyWinning = true;
    if (isTopLeft || isBottomRight) {
      // console.log("if (isTopLeft || isBottomRight) {");
      // left to right diagonal
      for (let i = 0; i < size; i++) {
        if (board[i * size + i] !== getSymbol(turnFlipper(turn))) {
          isDiagnoallyWinning = false;
          break;
        }
      }
    } else {
      // right to to bottom diagonal
      // console.log("else (isTopLeft || isBottomRight) {");
      for (let i = 0; i < size; i++) {
        if (board[(i + 1) * size - (i + 1)] !== getSymbol(turnFlipper(turn))) {
          isDiagnoallyWinning = false;
          break;
        }
      }
    }
    return isDiagnoallyWinning;
  } else {
    // all edges except diagonal
    // handle only down from top
    const colIndex = (index + 1) % size;
    const rowIndex = Math.floor((index + 1) / size);
    let isWinningAcrossRow = true;
    for (let i = 0; i < size; i++) {
      if (board[rowIndex * size + i] !== getSymbol(turnFlipper(turn))) {
        isWinningAcrossRow = false;
        break;
      }
    }

    let isWinningAcrossColumn = true;
    for (let i = 0; i < size; i++) {
      if (board[colIndex + i * size] !== getSymbol(turnFlipper(turn))) {
        isWinningAcrossColumn = false;
        break;
      }
    }

    return isWinningAcrossColumn || isWinningAcrossRow;
  }
}

const myBoard = [null, null, null, null, null, null, null, null, null];

// renderer
function renderer(board = []) {
  board.forEach((value, index) => {
    const box = document.querySelector(`#box-${index + 1}`);

    // attach event listener
    box.addEventListener("click", (event) => {
      if (!value) {
        myBoard[index] = turn;
        box.textContent = getSymbol(turn);
        if (checkWin(index, myBoard, boardSize)) alert(`${turn} won`);
        turn = turnFlipper();
      }
    });
  });
}

renderer(myBoard);
