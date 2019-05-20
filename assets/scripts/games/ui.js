'use strict'

const store = require('../store.js')
const gameLogic = require('./game-logic') // make sure this is correctly linked.

const onNewGameSuccess = (data) => {
  console.log(data, store)
  $('#message').text('New Game Started!')
  store.turn = 1
  store.gameID = data.game.id
  store.cells = data.game.cells
  store.over = data.game.over
  store.player = 'x'
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.box').text('')
  $('#message').text(`Player ${store.player}'s turn'`)
}

const onNewGameFailure = () => {
  console.log('failure')
  $('#message').text('Error: Could not start game.')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onUpdateGameSuccess = (playerTurn, cell) => {
  $(cell).text(`${store.player}`)
  gameLogic.gameBoard[store.id] = store.player
  store.cells = gameLogic.gameBoard
  console.log(store)
  if (gameLogic.checkForWin(gameLogic.gameBoard)) {

  } else if (store.player === 'x') {
    store.player = 'o'
    $('#message').text(`Player ${store.player}'s turn`)
  } else {
    store.player = 'x'
    $('#message').text(`Player ${store.player}'s turn`)
  }
}

const onUpdateGameFailure = data => {
  $('#message').text('Error: Could not make move.')
}

const onGameCountSuccess = data => {
  $('#game-count-msg').text('')
  data.games.forEach(game => {
    $('#game-count-msg').text(`${data.games.length}`)
  })
}

const onGameCountFailure = () => {
  $('#message').text('Could not retrive game count.')
}

module.exports = {
  onNewGameFailure,
  onNewGameSuccess,
  onUpdateGameFailure,
  onUpdateGameSuccess,
  onGameCountSuccess,
  onGameCountFailure
}
