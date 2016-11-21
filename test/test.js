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

  const styles = styles: [ {description: 'High in starting gravity and alcoholic strength, this style is somewhat diverse. Some American malt liquors are just slightly stronger than American lagers, while others approach bock strength. Some residual sweetness is perceived. Hop rates are very low, contributing little bitterness and virtually no hop aroma or flavor. Perception of sweet-fruity esters and complex alcohols (though not solvent-like) are acceptable at low levels. Chill haze and diacetyl should not be perceived.'} ]
  //action
  const actual = reducer(state, {type: 'INIT'})

  //assert

  t.deepEqual(actual, expected, 'here is something')
  t.end()

})
