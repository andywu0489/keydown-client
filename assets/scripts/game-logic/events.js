'use strict'
const getFormFields = require('../../../lib/get-form-fields')
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
    $('.1-box-one').html('x')
  } else if (board[0][1] === 'x') {
    $('.1-box-two').html('x')
  } else if (board[0][2] === 'x') {
    $('.1-box-three').html('x')
  } else if (board[0][3] === 'x') {
    $('.1-box-four').html('x')
  }

  if (board[1][0] === 'x') {
    $('.2-box-one').html('x')
  } else if (board[1][1] === 'x') {
    $('.2-box-two').html('x')
  } else if (board[1][2] === 'x') {
    $('.2-box-three').html('x')
  } else if (board[1][3] === 'x') {
    $('.2-box-four').html('x')
  }
  if (board[2][0] === 'x') {
    $('.3-box-one').html('x')
  } else if (board[2][1] === 'x') {
    $('.3-box-two').html('x')
  } else if (board[2][2] === 'x') {
    $('.3-box-three').html('x')
  } else if (board[2][3] === 'x') {
    $('.3-box-four').html('x')
  }
  if (board[3][0] === 'x') {
    $('.4-box-one').html('x')
  } else if (board[3][1] === 'x') {
    $('.4-box-two').html('x')
  } else if (board[3][2] === 'x') {
    $('.4-box-three').html('x')
  } else if (board[3][3] === 'x') {
    $('.4-box-four').html('x')
  }
  if (board[4][0] === 'x') {
    $('.5-box-one').html('x')
  } else if (board[4][1] === 'x') {
    $('.5-box-two').html('x')
  } else if (board[4][2] === 'x') {
    $('.5-box-three').html('x')
  } else if (board[4][3] === 'x') {
    $('.5-box-four').html('x')
  }
  if (board[5][0] === 'x') {
    $('.6-box-one').html('x')
  } else if (board[5][1] === 'x') {
    $('.6-box-two').html('x')
  } else if (board[5][2] === 'x') {
    $('.6-box-three').html('x')
  } else if (board[5][3] === 'x') {
    $('.6-box-four').html('x')
  }
}

let timeleft = 5

const onStartGame = () => {
  const countdown = setInterval(function () {
    document.getElementById('countdown').innerHTML = `Time Remaining: ${timeleft}`
    timeleft -= 1
    if (timeleft < 0) {
      clearInterval(countdown)
      gameOver()
      timeleft = 5
    }
  }, 1000)
  clearSpaces()
  board = []
  score = 0
  correctClicks = 0
  missedClicks = 0
  // setTimeout(gameOver, 5000)
  $('#game-board').show()
  $(document).on('keydown', checkZPressed)
  $(document).on('keydown', checkXPressed)
  $(document).on('keydown', checkCPressed)
  $(document).on('keydown', checkVPressed)
  while (board.length < 6) {
    generateRow()
  }
  layoutSpaces()
  $('.score').html(`Score: ${score}`)
  $('.start-game').hide()
  $('.game-over').hide()
}

const gameOver = () => {
  $(document).off('keydown', checkZPressed)
  $(document).off('keydown', checkXPressed)
  $(document).off('keydown', checkCPressed)
  $(document).off('keydown', checkVPressed)
  $('#game-board').hide()
  // $('.start-game').show()
  $('.final-score').html(`Score: ${score}`)
  $('.accuracy').html(`Accuracy: ${Math.floor(accuracy * 100) / 100}%`)
  $('.game-over').show()
}

const shiftBoard = () => {
  board.shift()
  return board
}

const clearSpaces = () => {
  $('.1-box-one').html('')
  $('.1-box-two').html('')
  $('.1-box-three').html('')
  $('.1-box-four').html('')

  $('.2-box-one').html('')
  $('.2-box-two').html('')
  $('.2-box-three').html('')
  $('.2-box-four').html('')

  $('.3-box-one').html('')
  $('.3-box-two').html('')
  $('.3-box-three').html('')
  $('.3-box-four').html('')

  $('.4-box-one').html('')
  $('.4-box-two').html('')
  $('.4-box-three').html('')
  $('.4-box-four').html('')

  $('.5-box-one').html('')
  $('.5-box-two').html('')
  $('.5-box-three').html('')
  $('.5-box-four').html('')

  $('.6-box-one').html('')
  $('.6-box-two').html('')
  $('.6-box-three').html('')
  $('.6-box-four').html('')
}

let missedClicks = 0

// const checkZXCVPressed = (event) => {
//   if (event.which === 90 || event.which === 88 || event.which === 67 || event.which === 86) {
//     missedClicks = missedClicks + 1
//     console.log(missedClicks)
//   }
// }

const checkZPressed = (event) => {
  if (event.which === 90 && board[0][0] === 'x') {
    onClick()
  } else if (event.which === 90) {
    missedClicks = missedClicks + 1
  }
  // console.log(`total: ${missedClicks}`)
}

const checkXPressed = (event) => {
  if (event.which === 88 && board[0][1] === 'x') {
    onClick()
  } else if (event.which === 88) {
    missedClicks = missedClicks + 1
  }
  // console.log(`total: ${missedClicks}`)
}

const checkCPressed = (event) => {
  if (event.which === 67 && board[0][2] === 'x') {
    onClick()
  } else if (event.which === 67) {
    missedClicks = missedClicks + 1
  }
  // console.log(`total: ${missedClicks}`)
}

const checkVPressed = (event) => {
  if (event.which === 86 && board[0][3] === 'x') {
    onClick()
  } else if (event.which === 86) {
    missedClicks = missedClicks + 1
  }
  // console.log(`total: ${missedClicks}`)
}

let correctClicks = 0

const onClick = () => {
  shiftBoard()
  generateRow()
  clearSpaces()
  layoutSpaces()
  add()
  $('.score').html(`Score: ${score}`)
  correctClicks = correctClicks + 1
  totalClicks = correctClicks + missedClicks
  accuracy = correctClicks / totalClicks * 100
  console.log(`%: ${accuracy}`)
  console.log(`correct: ${correctClicks}`)
  console.log(`missed: ${missedClicks}`)
  console.log(`total: ${totalClicks}`)
}

let score = 0

const add = () => {
  score = score + 100
}

let totalClicks = 0

let accuracy = 0

// const onHome = () => {
//   clearSpaces()
//   timeleft = -1
//   $('#game-board').hide()
//   $('.game-over').hide()
//   $('.start-game').show()
// }

module.exports = {
  onStartGame,
  onClick,
  checkZPressed,
  checkXPressed,
  checkCPressed,
  checkVPressed
  // onHome
}
