const React = require('react')
const ReactDOM = require('react-dom')
const {Router, IndexRoute, Route, hashHistory} = require('react-router')
const Layout = require('./layout')
const Landing = require('./landing')
const Search = require('./search')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

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
