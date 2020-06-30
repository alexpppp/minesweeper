document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    { row: 0, 
      col: 0,
      isMine: false,
      hidden: true
    },
    { row: 0, 
      col: 1,
      isMine: false,
      hidden: true
    },
    { row: 0, 
      col: 2,
      isMine: true,
      hidden: true
    },
    { row: 1, 
      col: 0,
      isMine: false,
      hidden: true
    },
    { row: 1, 
      col: 1,
      isMine: false,
      hidden: true
    },
    { row: 1, 
      col: 2,
      isMine: false,
      hidden: true
    },
    { row: 2, 
      col: 0,
      isMine: false,
      hidden: true
    },
    { row: 2, 
      col: 1,
      isMine: true,
      hidden: true
    },
    { row: 2, 
      col: 2,
      isMine: true,
      hidden: true
    }
  ]
  
}

function startGame () {
  for (cell in board.cells) {
    board.cells[cell].surroundingMines = countSurroundingMines(cell)
  }
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
console.log(board.cells)
  for(cell in board.cells) {
    // if cells that are mines are not marked, return
    if (board.cells[cell].isMine === true) {
      if (board.cells[cell].isMarked !== true)
        return
      }
    // if cells that are hidden aren't marked, return
    if (board.cells[cell].isMine === false) {
      if (board.cells[cell].hidden === true || board.cells[cell].isMarked === true) {
        return
      }
    }
  }
  
  //Rules to fail win
  // a mine that is not Marked
  // a non-mine that is hidden
  // a non-mine that is Marked



  // otherwise, display win message!  
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  // get surrounding cells as object
  var surroundingCells = lib.getSurroundingCells(board.cells[cell].row, board.cells[cell].col)
  // count how many are mines
  count = 0
  for (i in surroundingCells) {
    if (surroundingCells[i].isMine === true) {
      count++;}
  }
  return count
}