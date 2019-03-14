'use strict'
const store = require('../store')
const gameEvents = require('../game-logic/events')
// const gameEvents = require('../game-logic/events')

const onSignUpSuccess = (responseData) => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-success" role="alert">Successfully signed-up! Sign in to get started.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onSignUpFailure = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Something went wrong. Please try again.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onSignInSuccess = (responseData) => {
  $('.alert').alert('close')
  $('body').css('background-image', '')
  $('.auth-container').hide()
  $('.auth-jumbotron').hide()
  $('#user-message').html('<div class="alert alert-success" role="alert">Successfully signed-in!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
  $('.dash-nav').show()
  $('.dash-nav-1').hide()
  $('.main-container').show()
  $('.home').show()
  $('.start-jumbotron').show()
  setTimeout(function () { $('#user-message').html('') }, 1000)
  store.user = responseData.user
}

const onSignInFailure = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Something went wrong. Please try again.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onChangePasswordSuccess = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-success">Successfully changed password</div>')
  $('#change-password-modal').modal('hide')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onChangePasswordFailure = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-danger">Failed to change password. Please try again.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onSignOutSuccess = () => {
  $('.alert').alert('close')
  $('.main-container').hide()
  $('.auth-container').show()
  $('.dash-nav').hide()
  $('.dash-nav-1').show()
  $('.auth-jumbotron').show()
  $('#upload-cards').empty()
  $('.start-jumbotron').hide()
  $('#game-board').hide()
  // gameEvents.clearSpaces()
  $('#user-message').html('<div class="alert alert-success" role="alert">Successfully signed out.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
  $('.game-over').hide()
  clearInterval(store.timer)
  $('.my-scores').hide()
  gameEvents.timeleft = 30
  gameEvents.score = 0
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInFailure,
  onSignInSuccess,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutSuccess
}
