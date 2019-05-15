'use strict'

// const store = require('../store')

const onSignUpSuccess = responseData => {
  console.log('Success', responseData)
  $('#message').text('successfully created an account!')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignUpFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Error: could not create account')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess
}
