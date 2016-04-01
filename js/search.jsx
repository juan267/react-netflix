const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./header')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (searchTerm) {
    this.setState({
      searchTerm: searchTerm
    })
  },
  propTypes () {
    route: object
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermEvent={this.handleSearchTermEvent}
          searchTerm={this.state.searchTerm}>
        </Header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID}/>
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
// <pre><code>
//  {JSON.stringify(shows, null, 4)}
// </code></pre>
