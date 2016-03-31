const React = require('react')

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

module.exports = Layout

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
}
