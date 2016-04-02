const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm' // this is an action name
const initialState = {
  searchTerm: '',
  shows
} // this is my inital state is run when redux its booted

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action)
    default:
      return state
  }
} // this is like a controller it decides which reducer to use base on the action type

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
} // this is a reducer, it takes and initial state and returns a new state

const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
)) // this creates the store, and also configures the redux devtools

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    shows: state.shows
  }
} // this passess this state as props to all connected components

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
} // this passes all this actions as props to connected components

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps) // the connetor is used to conect components to redux

module.exports = { connector, store }
