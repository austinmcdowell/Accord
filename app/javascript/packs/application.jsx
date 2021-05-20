// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Fragment } from 'react'
import ContainerComponent from '../components/container_component'


import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Application = props => (
  <Fragment>
    <ContainerComponent />
  </Fragment>
)

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Application />,
    document.getElementById('app'),
  )
})
