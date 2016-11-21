const html = require('yo-yo')

const getStyles = require('../getStyles')

module.exports = (state, dispatch) => {
  const styles = state.styles
  console.log(styles)
  return html`
    <div class="styles">
    </div>
  `
}
