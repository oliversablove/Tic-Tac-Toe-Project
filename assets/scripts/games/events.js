'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')
const gameLogic = require('./game-logic')

const onNewGame = event => {
  event.preventDefault()
  gameLogic.gameBoard = ['', '', '', '', '', '', '', '', '']
  store.turn = 0
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = event => {
  event.preventDefault()
  store.id = event.target.id
  const cell = event.target

  if (store.cells[store.id] && !store.over) {
    $('#message').text('Invalid Move')
  } else if (!store.over) {
    api.updateGame(store.id, store.player, store.over)
      .then(ui.onUpdateGameSuccess(store.id, cell))
      .catch(ui.onUpdateGameFailure)
    store.turn++
  } else {
    $('#message').text('Game is already over. Press New Game to restart!')
  }
}

const onGameCount = event => {
  event.preventDefault()

  api.gameCount()
    .then(ui.onGameCountSuccess)
    .catch(ui.onGameCountFailure)
}

module.exports = {
  onNewGame,
  onUpdateGame,
  onGameCount
}
