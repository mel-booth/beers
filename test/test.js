const test = require('tape')
const reducer = require('../reducer')

test(function(t){
  //arrange
  const state = {
    beers: [
      {
      "name": "The Beast",
      "brewery": "Te Aro Brewing Company",
      "country": "New Zealand",
      "style": "Pinot Barrel Aged Russian Imperial Stout",
      "abv": "11.7%"
    },
    {
      "name": "Brewdog Black Hammer",
      "brewery": "BrewDog Brewery",
      "country": "Scotland",
      "style": "Black IPA",
      "abv": "7.2%"
    }]
  }

  const expected = {
    beers: [
      {
      "name": "The Beast",
      "brewery": "Te Aro Brewing Company",
      "country": "New Zealand",
      "style": "Pinot Barrel Aged Russian Imperial Stout",
      "abv": "11.7%"
    },
    {
      "name": "Brewdog Black Hammer",
      "brewery": "BrewDog Brewery",
      "country": "Scotland",
      "style": "Black IPA",
      "abv": "7.2%"
    }]
  }

  //action
  const actual = reducer(state, {type: 'INIT'})

  //assert

  t.deepEqual(actual, expected, 'here is something')
  t.end()

})
