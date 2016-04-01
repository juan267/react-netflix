const React = require('react')
const { Link, hashHistory } = require('react-router')
const { connector } = require('./store')

class Landing extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
  }
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  }
  gotoSearch (event) {
    event.preventDefault()
    hashHistory.push('search')
  }
  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <form onSubmit={this.gotoSearch}>
          <input type='text' className='search' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermEvent}/>
        </form>
        <Link to='/search' type='text' placeholder='search' className='browse-all'>or Browse All</Link>
      </div>
    )
  }
}


module.exports = connector(Landing)
