'use strict'
const events = require('./game-logic/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.start-game').on('click', events.onStartGame)
  $(document).on('keydown', events.checkZPressed)
  $(document).on('keydown', events.checkXPressed)
  $(document).on('keydown', events.checkCPressed)
  $(document).on('keydown', events.checkVPressed)
})
