var div = React.DOM.div
var h1 = React.DOM.h1

var juan = {
  hola(){
    return "como estas"
  }
}

var bla = React.createClass({
  render() {
    return (
      <div>Hola</div>
    )
  }
})

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, "Check Out this other thing")
      )
    )
  }
})



var MyTitleFac = React.createFactory(MyTitle)


var MyFirstComponent = (
  div({style:{color: "red"}},
    MyTitleFac(null), // Different but same
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.querySelector('#app'))
