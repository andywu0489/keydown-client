'use strict'
const events = require('./game-logic/events.js')
const authEvents = require('./authorization/events')

$(() => {
  $('.start-game').on('click', events.onStartGame)
  $('.replay').on('click', events.onStartGame)

  $('#index-button').on('click', events.onGetGames)
  $('#content').on('click', '#delete', events.onDeleteGame)
  // $(document).on('keydown', events.checkZPressed)
  // $(document).on('keydown', events.checkXPressed)
  // $(document).on('keydown', events.checkCPressed)
  // $(document).on('keydown', events.checkVPressed)

  $('.user-sign-in').show()
  $('.user-sign-up').hide()
  $('.dash-nav').hide()

  $('#sign-in-button').on('click', function () {
    $('.user-sign-up').hide()
    $('.user-sign-in').show()
  })
  $('#sign-up-button').on('click', function () {
    $('.user-sign-in').hide()
    $('.user-sign-up').show()
  })

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.game-over').hide()
  $('.start-jumbotron').hide()
  $('#home-button').on('click', events.onHome)
})
