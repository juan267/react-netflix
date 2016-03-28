var React = require('react')
var ReactDOM = require('react-dom')

var div = React.DOM.div
var MyTitle = require('./myTitle')

var MyTitleFac = React.createFactory(MyTitle)

var MyFirstComponent = (
  div({style: {color: 'red'}},
    MyTitleFac({title: 'props are grate'}), // Different but same
    React.createElement(MyTitle, {title: 'props use everywhere', color: 'red'}),
    React.createElement(MyTitle, {title: 'another title', color: 'mediumaquamarine'}),
    React.createElement(MyTitle, {title: 'yay other title', color: 'peru'}),
    React.createElement(MyTitle, {title: 'yay other title', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.querySelector('#app'))
