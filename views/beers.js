const html = require('yo-yo')
const beer = require('./beer')
const getBeers = require('../getBeers')

module.exports = (state, dispatch) => {
  const beers = state.beers
  console.log(beers);
  return html`
  <div>
    <div class="beers">
      ${state.isLoading ? html`<h3>Brewing...</h3>` : ''}
      ${beers.map(beer)}
    </div>
    <button class='loadBeer' onclick=${()=> getBeers(dispatch)}>Get the beers!</button>
    <button class='sort' onclick=${()=> getBeers(dispatch)}>Sort by ABV!</button>
    </div>
  `
}
