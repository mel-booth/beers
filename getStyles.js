const request = require('superagent')
const html = require('yo-yo')

const url = 'https://rogue-beers.herokuapp.com/api/v1/styles'

function getStyles(dispatch) {
  request
    .get(url)
    .end((err, res) => {
      dispatch({type: 'GET_STYLES', payload: res.body.styles})
    })
}

module.exports = getStyles
