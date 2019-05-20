'use strict'

const store = require('../store.js')
const gameLogic = require('./game-logic') // make sure this is correctly linked.

const onNewGameSuccess = data => {
  $('.container').show()
  $('#gameCount').show()
  $('#message').text('New Game Started!')
  store.turn = 1
  store.gameID = data.game.id
  store.cells = data.game.cells
  store.over = data.game.over
  store.player = 'X'
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.box').text('')
  $('#message').text(`Player ${store.player}'s Turn`)
}

const onNewGameFailure = data => {
  $('#message').text('Error: Could not Start Game.')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const onUpdateGameSuccess = (playerTurn, cell) => {
  $(cell).text(`${store.player}`)
  gameLogic.gameBoard[store.id] = store.player
  store.cells = gameLogic.gameBoard
  if (gameLogic.checkForWin(gameLogic.gameBoard)) {

  } else if (store.player === 'X') {
    store.player = 'O'
    $('#message').text(`Player ${store.player}'s turn`)
  } else {
    store.player = 'X'
    $('#message').text(`Player ${store.player}'s turn`)
  }
}

const onUpdateGameFailure = data => {
  $('#message').text('Error: Could not Make Move.')
}

const onGameCountSuccess = data => {
  $('#game-count-msg').text('')
  data.games.forEach(game => {
    $('#message').text(`You have played a total of ${data.games.length} games of Tic Tac Toe!`)
  })
}

const onGameCountFailure = () => {
  $('#message').text('Error: Could not Retrive Game Count.')
}

module.exports = {
  onNewGameFailure,
  onNewGameSuccess,
  onUpdateGameFailure,
  onUpdateGameSuccess,
  onGameCountSuccess,
  onGameCountFailure
}
