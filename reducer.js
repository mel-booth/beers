module.exports = reducer
const clone = require('clone');

function reducer(state, action) {
  const newState = clone(state)
  switch(action.type){
    case 'INIT':
      return newState
    case 'GET_BEERS':
      newState.beers = action.payload
      return newState
    case 'GET_STYLES':
      newState.styles = action.payload
      console.log(newState.styles);
      return newState
    case 'SHOW_STYLE':
      newState.showStyles = !newState.showStyles
      return newState
    case
    case 'TOGGLE_LOADING':
      newState.isLoading = !newState.isLoading
      return newState
    default:
      return newState
  }
}
