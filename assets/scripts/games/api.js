'use strict'

const config = require('../config')
const store = require('../store')

const newGame = data => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const updateGame = (index, value, over) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

module.exports = {
  newGame,
  updateGame
}
