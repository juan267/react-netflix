const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./header')
const { connector } = require('./store')
const { arrayOf, object, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    searchTerm: string,
    shows: arrayOf(object)
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch/>
        <div className='shows'>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID}/>
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
// <pre><code>
//  {JSON.stringify(shows, null, 4)}
// </code></pre>
