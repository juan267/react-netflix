const React = require('react')
const Header = require('./header')

class Details extends React.Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>
            {this.props.params.title}
          </h1>
          <h2 className='video-year'>({this.props.params.year})</h2>
          <img src={`public/img/posters/${this.props.params.poster}`} alt='' className='video-poster' />
          <p className='video-description'>{this.props.params.description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${this.props.params.trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  params: React.PropTypes.object
}

module.exports = Details
