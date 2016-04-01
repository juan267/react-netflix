const React = require('react')
const { Link } = require('react-router')
const { connector } = require('./store')
const { func, string, bool } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    searchTerm: string,
    showSearch: bool
  },
  handleSearchTerm (e) {
    this.props.setSearchTerm(e.target.value)
  },
  render () {
    let searchUtils
    if (this.props.showSearch) {
      searchUtils = <input type='text' className='search-input' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTerm}/>
    } else {
      searchUtils = (
        <h2 className='header-back'>
          <Link to='/search'>Back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link className='bran-link' to='/'>svideo</Link>
        </h1>
        {searchUtils}
      </header>
    )
  }
})

module.exports = connector(Header)
