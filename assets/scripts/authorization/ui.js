'use strict'
const store = require('../store')
const gameEvents = require('../game-logic/events')
// const gameEvents = require('../game-logic/events')

const onSignUpSuccess = (responseData) => {
  $('.alert-danger').alert('close')
  $('.alert-success').alert('close')
  $('#user-message').html('<div class="alert alert-success" role="alert">Successfully signed-up! Please sign-in.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onSignUpFailure = () => {
  $('.alert-danger').alert('close')
  $('.alert-success').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Something went wrong. Please try again.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onSignInSuccess = (responseData) => {
  $('.alert-danger').alert('close')
  $('.alert-success').alert('close')
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
  $('.alert-danger').alert('close')
  $('.alert-success').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Something went wrong. Please try again.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onChangePasswordSuccess = () => {
  $('.alert-danger').alert('close')
  $('.alert-success').alert('close')
  $('#user-message').html('<div class="alert alert-success">Successfully changed password</div>')
  $('#change-password-modal').modal('hide')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onChangePasswordFailure = () => {
  $('.alert-danger').alert('close')
  $('.alert-success').alert('close')
  $('#user-message').html('<div class="alert alert-danger">Failed to change password. Please try again.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onSignOutSuccess = () => {
  store.timeleft = 30
  clearInterval(store.timer)
  $('.alert-danger').alert('close')
  $('.alert-success').alert('close')
  $('.main-container').hide()
  $('.auth-container').show()
  $('.dash-nav').hide()
  $('#sign-up-button').show()
  $('.auth-jumbotron').show()
  $('#upload-cards').empty()
  $('.start-jumbotron').hide()
  $('#game-board').hide()
  $('#user-message').html('<div class="alert alert-success" role="alert">Successfully signed out.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
  $('.game-over').hide()
  $('.my-scores').hide()
  store.score = 0
  $(document).off('keydown', gameEvents.checkZPressed)
  $(document).off('keydown', gameEvents.checkXPressed)
  $(document).off('keydown', gameEvents.checkCPressed)
  $(document).off('keydown', gameEvents.checkVPressed)
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
