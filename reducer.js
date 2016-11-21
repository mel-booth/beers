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
    case 'TOGGLE_LOADING':
      newState.isLoading = !newState.isLoading
      return newState
    default:
      return newState
  }
}
