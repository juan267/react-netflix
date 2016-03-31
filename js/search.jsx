const React = require('react')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show) => (
        <div className='show-card'>
          <img className='show-card-img' src={`public/img/posters/${show.poster}`} />
          <div className='show-card-text'>
            <h3 className='show-card-title'>{show.title}</h3>
            <h4 className='show-card-year'>({show.year})</h4>
            <p className='show-card-description'>{show.description}</p>
          </div>
        </div>
       ))}
    </div>
  </div>
)

module.exports = Search
// <pre><code>
//  {JSON.stringify(shows, null, 4)}
// </code></pre>
