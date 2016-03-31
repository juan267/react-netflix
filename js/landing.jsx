const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input type='text' className='search' placeholder='Search'/>
      <Link to='/search' type='text' placeholder='search' className='browse-all'>or Borwse All</Link>
    </div>
  </div>
)

module.exports = Landing
