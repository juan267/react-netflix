const React = require('react')
const Header = require('./header')
const axios = require('axios')
const { connector } = require('./store')

class Details extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }
  assignShow (id) {
    const show = this.props.shows.filter((show) => {
      return show['imdbID'] === id
    })
    return show[0]
  }
  componentDidMount () {
    // perfect place to do ajax calls
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
    .then((response) => {
      this.setState({omdbData: response.data})
    })
    .catch((error) => {
      console.log('axios error', error)
    })
  }
  render () {
    const { title, year, description, trailer, poster } = this.assignShow(this.props.params.id)
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>
            {title}
          </h1>
          <h2 className='video-year'>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} alt='' className='video-poster' />
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
