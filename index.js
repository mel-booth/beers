const html = require('yo-yo')
const request = require('superagent')
const redux = require('redux')

const reducer = require('./reducer')
const beer = require('./views/beer')
const beers = require('./views/beers')

const initialState = {

  beers: [],
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
