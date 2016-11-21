const request = require('superagent')
const html = require('yo-yo')

const url = 'https://rogue-beers.herokuapp.com/api/v1/beers'

function getBeers(dispatch) {
  dispatch({type: 'TOGGLE_LOADING'})
  request
    .get(url)
    .end((err, res) => {
      dispatch({type: 'GET_BEERS', payload: res.body.beers})
    })
}

module.exports = getBeers
