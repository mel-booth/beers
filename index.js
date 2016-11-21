const html = require('yo-yo')
const request = require('superagent')
const redux = require('redux')

const reducer = require('./reducer')
const beer = require('./views/beer')
const beers = require('./views/beers')

const initialState = {

  beers: [],
  styles: [ {description: 'High in starting gravity and alcoholic strength, this style is somewhat diverse. Some American malt liquors are just slightly stronger than American lagers, while others approach bock strength. Some residual sweetness is perceived. Hop rates are very low, contributing little bitterness and virtually no hop aroma or flavor. Perception of sweet-fruity esters and complex alcohols (though not solvent-like) are acceptable at low levels. Chill haze and diacetyl should not be perceived.'} ],
  isLoading: false
}

const store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)

store.subscribe(() => {
  const state = store.getState()
  html.update(app, beers(state, dispatch))
})

dispatch({type: 'INIT'})
