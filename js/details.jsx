const React = require('react')
const Header = require('./header')
const { connector } = require('./store')

class Details extends React.Component {
  render () {
    const show = this.props.shows.filter((show) => {
      return show['imdbID'] === this.props.params.id
    })
    const { title, year, description, trailer, poster } = show[0]
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>
            {title}
          </h1>
          <h2 className='video-year'>({year})</h2>
          <img src={`public/img/posters/${poster}`} alt='' className='video-poster' />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes
Details.propTypes = {
  params: object,
  shows: arrayOf(object).isRequired
}

module.exports = connector(Details)
