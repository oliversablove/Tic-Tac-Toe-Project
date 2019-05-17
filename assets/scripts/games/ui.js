'use strict'

const store = require('../store.js')

const onNewGameSuccess = data => {
  console.log('success', data)
  store.game = data.game
  // must update data.game in UPDATE section
  $('#message').text('New Game Started!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onNewGameFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Error: Could not start game.')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onInvalidMove = () => {
  console.log('Error: Capanese')
  $('#message').text('Invalid Move')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // $('#message').trigger('reset')
  // setTimeout(() => $('#message').text(''), 2000)
}

const onPlayerOTurn = () => {
  $('#message').text('Player O Turn')
  // setTimeout(() => $('#message').text(''), 2000)
}

const onPlayerXTurn = () => {
  $('#message').text('Player X Turn')
  // setTimeout(() => $('#message').text(''), 2000)
}

module.exports = {
  onNewGameFailure,
  onNewGameSuccess,
  onInvalidMove,
  onPlayerOTurn,
  onPlayerXTurn
}
