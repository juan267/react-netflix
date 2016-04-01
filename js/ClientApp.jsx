const React = require('react')
const ReactDOM = require('react-dom')
const {Router, IndexRoute, Route, hashHistory} = require('react-router')
const Layout = require('./layout')
const { shows } = require('../public/data')
const Landing = require('./landing')
const Search = require('./search')
const Details = require('./details')

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => {
      return show.imdbID === nextState.params.id
    })

    if (showArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows}/>
          <Route path='/details/:id' component={Details} shows={shows} onEnter={this.assignShow}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App/>, document.querySelector('#app'))

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
