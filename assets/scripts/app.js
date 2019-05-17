'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gamesEvents = require('./games/events')
const gameLogic = require('./games/game-logic')

$(() => {
  // user
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  // game
  $('#new-game').on('click', gamesEvents.onNewGame)
  $('.box').on('click', gameLogic.onBoxClick)

})
