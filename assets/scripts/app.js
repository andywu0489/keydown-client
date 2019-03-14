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

  $('#sign-in-button').hide()

  $('#sign-in-button').on('click', function () {
    $('.user-sign-up').hide()
    $('.user-sign-in').show()
    $('form').trigger('reset')
    $('#sign-in-button').hide()
    $('#sign-up-button').show()
  })
  $('#sign-up-button').on('click', function () {
    $('.user-sign-in').hide()
    $('.user-sign-up').show()
    $('form').trigger('reset')
    $('#sign-in-button').show()
    $('#sign-up-button').hide()
  })

  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.game-over').hide()
  $('.start-jumbotron').hide()
  $('#home-button').on('click', events.onHome)
  $('.start-game').hover(function () {
    $('.start-game').css('background-color', '#275fd8')
  }, function () {
    $('.start-game').css('background-color', 'gold')
  })
  $('.start-game').hover(function () {
    $('.start-game').css('color', 'white')
  }, function () {
    $('.start-game').css('color', 'black')
  })
  $('.replay').hover(function () {
    $('.replay').css('background-color', '#275fd8')
  }, function () {
    $('.replay').css('background-color', 'gold')
  })
  $('.replay').hover(function () {
    $('.replay').css('color', 'white')
  }, function () {
    $('.replay').css('color', 'black')
  })
  $('.btn-default').hover(function () {
    $('.btn-default').css('background-color', '#275fd8')
  }, function () {
    $('.btn-default').css('background-color', 'gold')
  })
  $('.btn-default').hover(function () {
    $('.btn-default').css('color', 'white')
  }, function () {
    $('.btn-default').css('color', 'black')
  })
})
