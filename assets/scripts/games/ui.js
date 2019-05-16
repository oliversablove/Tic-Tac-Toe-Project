'use strict'

const store = require('../store.js')

const onNewGameSuccess = data => {
  console.log('success', data)
  store.game = data.game.id
  $('#message').text('New Game Started!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onNewGameFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Error: Capanese')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onNewGameFailure,
  onNewGameSuccess
}
