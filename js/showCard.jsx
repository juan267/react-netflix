const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
  <div className='show-card'>
    <img className='show-card-img' src={`public/img/posters/${props.poster}`} />
    <div className='show-card-text'>
      <Link to={`/details/${props.imdbID}`}><h3 className='show-card-title'>{props.title}</h3></Link>
      <h4 className='show-card-year'>({props.year})</h4>
      <p className='show-card-description'>{props.description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  title: string,
  description: string,
  year: string,
  poster: string,
  imdbID: string
}

module.exports = ShowCard
// Smart component with un needed overhead
// const ShowCard = React.createClass({
//   render () {
//     return (
//       <div className='show-card'>
//         <img className='show-card-img' src={`public/img/posters/${this.props.show.poster}`} />
//         <div className='show-card-text'>
//           <h3 className='show-card-title'>{this.props.show.title}</h3>
//           <h4 className='show-card-year'>({this.props.show.year})</h4>
//           <p className='show-card-description'>{this.props.show.description}</p>
//         </div>
//       </div>
//    )
//   }
// })

