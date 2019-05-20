'use strict'

const store = require('../store.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
store.turn = 0

const checkForWin = gameBoard => {
  if ((gameBoard[0] && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) || // Has to also = 'x' or 'o'
      (gameBoard[3] && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) ||
      (gameBoard[6] && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) ||
      (gameBoard[0] && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) ||
      (gameBoard[1] && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) ||
      (gameBoard[2] && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) ||
      (gameBoard[0] && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) ||
      (gameBoard[2] && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6])) {
    store.over = true
    console.log('Game is over')
    $('#message').text(`Game Over: Player ${store.player} wins!`)
    return true
  } else if (store.turn === 9) {
    store.over = true
    console.log('Game Over')
    $('#message').text('Game Over: Tie!')
    return true
  } else {
    store.over = false
    return false
  }
}
/* const winningCombs = [
  [0, 1, 2], // horiztonal
  [0, 4, 8], // diagonal
  [0, 3, 6], // vertical
  [1, 4, 7], // vertical
  [2, 4, 6], // diagonal
  [2, 5, 8], // vertical
  [3, 4, 5], // horizontal
  [6, 7, 8] // horizontal
]

function setMessage (msg) {
  document.getElementByID('message').innerText = msg
}
*/

/* function checkForWinner (move) {
  let result = false
  if (checkRow(1, 2, 3, move) ||
  (checkRow(1, 2, 3, move) ||
  (checkRow(4, 5, 6, move) ||
  (checkRow(7, 8, 9, move) ||
  (checkRow(2, 5, 8, move) ||
  (checkRow(3, 6, 9, move) ||
  (checkRow(1, 5, 9, move) ||
  (checkRow(3, 5, 7, move) {
    result = true
  }
  return result
}
// use array[id] instead of get element by id
function checkRow (a, b, c, move) {
  let result = false
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true
  }
  return result
}

function getBox (number) {
  return document.getElementByID('s' + number).innerText
} */

module.exports = {
  gameBoard,
  checkForWin
}
