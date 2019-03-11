'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const board = []
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

const onStartGame = () => {
  while (board.length < 6) {
    generateRow()
  }
  layoutSpaces()
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

const checkZPressed = (event) => {
  if (event.which === 90 && board[0][0] === 'x') {
    onClick()
  }
}

const checkXPressed = (event) => {
  if (event.which === 88 && board[0][1] === 'x') {
    onClick()
  }
}

const checkCPressed = (event) => {
  if (event.which === 67 && board[0][2] === 'x') {
    onClick()
  }
}

const checkVPressed = (event) => {
  if (event.which === 86 && board[0][3] === 'x') {
    onClick()
  }
}

const onClick = () => {
  shiftBoard()
  generateRow()
  clearSpaces()
  layoutSpaces()
  add()
  $('.score').html('<p>jhgjhg</p>')
  console.log(score)
}

let score = 0

const add = () => {
  score = score + 100
}

module.exports = {
  onStartGame,
  onClick,
  checkZPressed,
  checkXPressed,
  checkCPressed,
  checkVPressed
}
