'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  console.log('from api')
  console.log('store value is', store)

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp
}
