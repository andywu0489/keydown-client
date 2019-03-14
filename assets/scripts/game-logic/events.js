'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let board = []
const generateRow = () => {
  const randomIndex = (num) => {
    return Math.floor(Math.random() * Math.floor(num))
  }
  const rowArray = new Array(4)
  rowArray[randomIndex(4)] = 'x'

  board.push(rowArray)
}

const layoutSpaces = () => {
  if (board[0][0] === 'x') {
    $('#1').css('background-color', 'black')
  } else if (board[0][1] === 'x') {
    $('#2').css('background-color', 'black')
  } else if (board[0][2] === 'x') {
    $('#3').css('background-color', 'black')
  } else if (board[0][3] === 'x') {
    $('#4').css('background-color', 'black')
  }

  if (board[1][0] === 'x') {
    $('#5').css('background-color', 'black')
  } else if (board[1][1] === 'x') {
    $('#6').css('background-color', 'black')
  } else if (board[1][2] === 'x') {
    $('#7').css('background-color', 'black')
  } else if (board[1][3] === 'x') {
    $('#8').css('background-color', 'black')
  }
  if (board[2][0] === 'x') {
    $('#9').css('background-color', 'black')
  } else if (board[2][1] === 'x') {
    $('#10').css('background-color', 'black')
  } else if (board[2][2] === 'x') {
    $('#11').css('background-color', 'black')
  } else if (board[2][3] === 'x') {
    $('#12').css('background-color', 'black')
  }
  if (board[3][0] === 'x') {
    $('#13').css('background-color', 'black')
  } else if (board[3][1] === 'x') {
    $('#14').css('background-color', 'black')
  } else if (board[3][2] === 'x') {
    $('#15').css('background-color', 'black')
  } else if (board[3][3] === 'x') {
    $('#16').css('background-color', 'black')
  }
  if (board[4][0] === 'x') {
    $('#17').css('background-color', 'black')
  } else if (board[4][1] === 'x') {
    $('#18').css('background-color', 'black')
  } else if (board[4][2] === 'x') {
    $('#19').css('background-color', 'black')
  } else if (board[4][3] === 'x') {
    $('#20').css('background-color', 'black')
  }
  if (board[5][0] === 'x') {
    $('#21').css('background-color', 'black')
  } else if (board[5][1] === 'x') {
    $('#22').css('background-color', 'black')
  } else if (board[5][2] === 'x') {
    $('#23').css('background-color', 'black')
  } else if (board[5][3] === 'x') {
    $('#24').css('background-color', 'black')
  }
}

let timeleft = 30

const countdown = () => {
  store.timer = setInterval(function () {
    $('#countdown').html(`Time Remaining: ${timeleft}`)
    timeleft -= 1
    if (timeleft < 0) {
      clearInterval(store.timer)
      gameOver()
      timeleft = 30
    }
  }, 1000)
}

// CREATE GAME
const onStartGame = (score, accuracy) => {
  event.preventDefault()
  const data =
  {
    'game': {
      'score': 0,
      'accuracy': 0,
      'owner': store.user._id
    }
  }
  api.createGame(data)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
  $('#countdown').html(`Time Remaining: ${timeleft}`)
  countdown()
  clearSpaces()
  board = []
  score = 0
  correctClicks = 0
  missedClicks = 0
  // setTimeout(gameOver, 5000)
  $('#game-board').show()
  $(document).off('keydown', checkZPressed)
  $(document).off('keydown', checkXPressed)
  $(document).off('keydown', checkCPressed)
  $(document).off('keydown', checkVPressed)
  $(document).on('keydown', checkZPressed)
  $(document).on('keydown', checkXPressed)
  $(document).on('keydown', checkCPressed)
  $(document).on('keydown', checkVPressed)
  while (board.length < 6) {
    generateRow()
  }
  layoutSpaces()
  $('.score').html(`Score: ${score}`)
  $('.home').hide()
  $('.game-over').hide()
  timeleft = 30
}

// UPDATE GAME
const onUpdateGame = (score, accuracy) => {
  const data =
  {
    'game': {
      'score': score,
      'accuracy': accuracy,
      'owner': store.user._id
    }
  }
  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const gameOver = () => {
  $(document).off('keydown', checkZPressed)
  $(document).off('keydown', checkXPressed)
  $(document).off('keydown', checkCPressed)
  $(document).off('keydown', checkVPressed)
  $('#game-board').hide()
  // $('.start-game').show()
  $('.final-score').html(`Score: ${score}`)
  $('.accuracy').html(`Accuracy: ${accuracy}%`)
  $('.game-over').show()
  score = 0
}

const shiftBoard = () => {
  board.shift()
  return board
}

const clearSpaces = () => {
  $('#1').css('background-color', 'white')
  $('#2').css('background-color', 'white')
  $('#3').css('background-color', 'white')
  $('#4').css('background-color', 'white')

  $('#5').css('background-color', 'white')
  $('#6').css('background-color', 'white')
  $('#7').css('background-color', 'white')
  $('#8').css('background-color', 'white')

  $('#9').css('background-color', 'white')
  $('#10').css('background-color', 'white')
  $('#11').css('background-color', 'white')
  $('#12').css('background-color', 'white')

  $('#13').css('background-color', 'white')
  $('#14').css('background-color', 'white')
  $('#15').css('background-color', 'white')
  $('#16').css('background-color', 'white')

  $('#17').css('background-color', 'white')
  $('#18').css('background-color', 'white')
  $('#19').css('background-color', 'white')
  $('#20').css('background-color', 'white')

  $('#21').css('background-color', 'white')
  $('#22').css('background-color', 'white')
  $('#23').css('background-color', 'white')
  $('#24').css('background-color', 'white')
}

let missedClicks = 0

const checkZPressed = (event) => {
  if (event.which === 90 && board[0][0] === 'x') {
    onClick()
    onUpdateGame(score, accuracy)
  } else if (event.which === 90 && board[0][0] !== 'x') {
    onWrongClick()
    onUpdateGame(score, accuracy)
  }
}

const checkXPressed = (event) => {
  if (event.which === 88 && board[0][1] === 'x') {
    onClick()
    onUpdateGame(score, accuracy)
  } else if (event.which === 88 && board[0][1] !== 'x') {
    onWrongClick()
    onUpdateGame(score, accuracy)
  }
}

const checkCPressed = (event) => {
  if (event.which === 67 && board[0][2] === 'x') {
    onClick()
    onUpdateGame(score, accuracy)
  } else if (event.which === 67 && board[0][2] !== 'x') {
    onWrongClick()
    onUpdateGame(score, accuracy)
  }
}

const checkVPressed = (event) => {
  if (event.which === 86 && board[0][3] === 'x') {
    onClick()
    onUpdateGame(score, accuracy)
  } else if (event.which === 86 && board[0][3] !== 'x') {
    onWrongClick()
    onUpdateGame(score, accuracy)
  }
}

let correctClicks = 0

const onWrongClick = () => {
  missedClicks = missedClicks + 1
  totalClicks = correctClicks + missedClicks
  accuracy1 = correctClicks / totalClicks * 100
  accuracy = Math.floor(accuracy1 * 100) / 100
  $('.start-jumbotron').css('border', '15px solid red')
  setTimeout(function () { $('.start-jumbotron').css('border', 0) }, 50)
}

const onClick = () => {
  console.log('hi')
  $('.start-jumbotron').css('border', '15px solid #6bf442')
  setTimeout(function () { $('.start-jumbotron').css('border', 0) }, 50)
  shiftBoard()
  generateRow()
  clearSpaces()
  layoutSpaces()
  add()
  $('.score').html(`Score: ${score}`)
  correctClicks = correctClicks + 1
  totalClicks = correctClicks + missedClicks
  accuracy1 = correctClicks / totalClicks * 100
  accuracy = Math.floor(accuracy1 * 100) / 100
}

let score = 0

const add = () => {
  score = score + 100
}

let totalClicks = 0

let accuracy1 = 0

let accuracy = 0

const onHome = () => {
  clearInterval(store.timer)
  $('#user-message').html('<div class="alert alert-success">Welcome Home</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
  $('#game-board').hide()
  $('.home').show()
  $('.game-over').hide()
  $('.my-scores').hide()
  timeleft = 30
  score = 0
}

const onGetGames = function (responseData) {
  api.index()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
  $('#game-board').hide()
  $('.home').hide()
  $('.game-over').hide()
  clearInterval(store.timer)
  timeleft = 30
  score = 0
}

const onGetGamesAfterDelete = function () {
  api.index()
    .then(ui.onGetGamesAfterDeleteSuccess)
    .catch(ui.onGetGamesFailure)
}

const onDeleteGame = (event) => {
  event.preventDefault()
  const target = $(event.target).closest('section').data('id')
  api.destroy(target)
    .then(() => onGetGamesAfterDelete())
    .catch(ui.onDeleteGameFailure)
}

module.exports = {
  onStartGame,
  onClick,
  checkZPressed,
  checkXPressed,
  checkCPressed,
  checkVPressed,
  onGetGames,
  onDeleteGame,
  onGetGamesAfterDelete,
  onUpdateGame,
  clearSpaces,
  gameOver,
  onHome
}
