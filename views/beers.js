const html = require('yo-yo')
const beerView = require('./beer')
const getBeers = require('../getBeers')

module.exports = (state, dispatch) => {
  const beers = state.beers
  console.log(beers);
  return html`
  <div>
    <div class="beers">
      ${state.isLoading ? html`<h3>Brewing...</h3>` : ''}
      ${beers.map((beer)=>{
        return beerView(beer, dispatch)
      })}
    </div>
    <button class='loadBeer' onclick=${()=> getBeers(dispatch)}>Get the beers!</button>
    <button class='sort' onclick=${()=> (dispatch)}>Sort by ABV!</button>
    </div>
  `
}

function filterStyle(beers, style) {

  //go through styles of beers
  //put out specific style
  //render that style
}
