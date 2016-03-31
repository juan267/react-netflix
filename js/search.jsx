const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input type='text' className='search-input' placeholder='Search' />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
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
