'use strict'

const store = require('../store')

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

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Successfully signed in!')
  $('#message').removeClass()
  $('#message').addClass('success')

  store.user = responseData.user
  console.log('store is', store)
}

const onSignInFailure = responseData => {
  console.log('failure', responseData)
  $('#message').text('Error: failed to sign in.')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSignOutSuccess = () => {
  $('#message').text('Sign out successful')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignOutFailure = () => {
  $('#message').text('Error: failed to sign out. Lol.')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess
}
