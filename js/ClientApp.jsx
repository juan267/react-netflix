const React = require('react')
const ReactDOM = require('react-dom')

const div = React.DOM.div
const MyTitle = require('./myTitle')

const MyFirstComponent = (
  <div style={{color: 'red'}}>
    <MyTitle title='props use everywhere' color='rebeccapurple'/>
    <MyTitle title='another title' color='mediumaquamarine'/>
    <MyTitle title='yay other title' color='peru'/>
    <MyTitle title='last title' color='papayawhip'/>
  </div>
)

ReactDOM.render(MyFirstComponent, document.querySelector('#app'))

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
