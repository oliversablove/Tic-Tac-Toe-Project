'use strict'

const store = require('../store')

const onSignUpSuccess = responseData => {
  $('#message').text('Successfully created an account!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#message').text('Error: could not create account')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#message').text('Successfully signed in!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')

  store.user = responseData.user
}

const onSignInFailure = responseData => {
  $('#message').text('Error: failed to sign in.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#message').text('Sign out successful')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onSignOutFailure = () => {
  $('#message').text('Error: failed to sign out. Lol.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Password successfully changed!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#message').text('Error: could not change password.')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onChangePasswordFailure,
  onChangePasswordSuccess
}
