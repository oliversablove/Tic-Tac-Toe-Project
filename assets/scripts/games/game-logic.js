'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

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
let currentPlayer = 'X'
const gameBoard = ['', '', '', '', '', '', '', '', '']

// Switch Players
const onBoxClick = (event) => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    ui.onPlayerXTurn()
  } else {
    currentPlayer = 'X'
    ui.onPlayerOTurn()
  }
  const text = $(event.target).text()
  if (text === '') {
    $(event.target).text(currentPlayer)
  } else if (text !== '') {
    ui.onInvalidMove()
  }
}

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
  onBoxClick
}
