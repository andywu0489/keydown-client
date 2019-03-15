'use strict'
const store = require('../store')

const showGamesTemplate = require('../templates/game-listing.handlebars')

const onGetGamesSuccess = (data) => {
  const showGamesHtml = showGamesTemplate({ games: data.games.sort(function (game1, game2) {
    return game2.score - game1.score
  }).slice(0, 3) })

  $('.alert').alert('close')
  $('#content').html(showGamesHtml)
  if ($('#content').is(':empty')) {
    $('.my-scores').show()
    $('#user-message').html('<div class="alert alert-danger" role="alert">No games played.</div>')
    setTimeout(function () { $('#user-message').html('') }, 1000)
  } else {
    $('.my-scores').show()
    $('#user-message').html('<div class="alert alert-success" role="alert">Successfully got games.</div>')
    setTimeout(function () { $('#user-message').html('') }, 1000)
  }
}

const onGetGamesFailure = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Failed to get games.</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onGetGamesAfterDeleteSuccess = function (data) {
  const showGamesHtml = showGamesTemplate({ games: data.games.sort(function (game1, game2) {
    return game2.score - game1.score
  }).slice(0, 3) })
  $('.alert').alert('close')
  $('#content').html(showGamesHtml)
  $('#user-message').html('<div class="alert alert-success" role="alert">Successfully deleted game</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onCreateGameSuccess = (responseData) => {
  store.game = responseData.game
}

const onCreateGameFailure = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Failed to create game</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onUpdateGameFailure = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Failed to update game</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

const onDeleteGameFailure = () => {
  $('.alert').alert('close')
  $('#user-message').html('<div class="alert alert-danger" role="alert">Failed to delete game</div>')
  setTimeout(function () { $('#user-message').html('') }, 1000)
}

module.exports = {
  onGetGamesSuccess,
  onGetGamesAfterDeleteSuccess,
  onCreateGameSuccess,
  onGetGamesFailure,
  onCreateGameFailure,
  onUpdateGameFailure,
  onDeleteGameFailure
}
