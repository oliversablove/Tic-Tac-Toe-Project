'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onNewGame = event => {
  event.preventDefault()

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

let currentPlayer = 'X'
const gameBoard = []

const onBoxClick = function (event) {
  const boxNumber = $(event.target).data('box-number')
  console.log(boxNumber)
  const text = $(event.target).text()
  if (text === '') {
    $(event.target).text(currentPlayer)
  }
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

module.exports = {
  onNewGame,
  onBoxClick,
  gameBoard
}
