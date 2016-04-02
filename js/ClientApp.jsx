const React = require('react')
const {Router, IndexRoute, Route, browserHistory} = require('react-router')
const { store } = require('./store')
const { Provider } = require('react-redux')
const Layout = require('./layout')
// const { shows } = require('../public/data') // the shows are now in redux
const Landing = require('./landing')
const Search = require('./search')
const Details = require('./details')

const myRoutes = () => (
  <Route path='/' component={Layout}>
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  // assignShow (nextState, replace) {
  //   const showArray = shows.filter((show) => {
  //     return show.imdbID === nextState.params.id
  //   })

  //   if (showArray.length < 1) {
  //     return replace('/')
  //   }

  //   Object.assign(nextState.params, showArray[0])
  //   return nextState
  // } this is no longer used thanks to redux,
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
// const MyTitleFac = React.createFactory(MyTitle)

// var MyFirstComponent = (
//   div({style: {color: 'red'}},
//     MyTitleFac({title: 'props are grate'}), // Different but same than React.createElement
//     React.createElement(MyTitle, {title: 'props use everywhere', color: 'red'}),
//     React.createElement(MyTitle, {title: 'another title', color: 'mediumaquamarine'}),
//     React.createElement(MyTitle, {title: 'yay other title', color: 'peru'}),
//     React.createElement(MyTitle, {title: 'yay other title', color: 'papayawhip'})
//   )
// )
