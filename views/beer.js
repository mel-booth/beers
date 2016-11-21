const html = require('yo-yo')

module.exports = (beer, dispatch) => {
  const { name, brewery, country, style, abv } = beer
  return html `
    <div>
      <div class='beer'>
        <div>Name: ${name}</div>
        <div>Brewery: ${brewery}</div>
        <div>Country: ${country}</div>
        <div>Style: <button>${style}</button></div>
        <div>abv: ${abv}</div>
      </div>
    </div>
  `
}
