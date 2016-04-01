const React = require('react')
const { Link } = require('react-router')
const { func, string} = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handleSearchTermEvent: func,
    searchTerm: string
  },
  handleSearchTerm (e) {
    this.props.handleSearchTermEvent(e.target.value)
  },
  render () {
    let searchUtils
    console.log(this.props)
    if ('handleSearchTermEvent' in this.props) {
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

module.exports = Header
