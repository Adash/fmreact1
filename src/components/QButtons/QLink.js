import React from 'react'
import { Link } from '@reach/router'

import './qbutton.css'

const QLink = ({ path, children }) => {
  return (
    <Link className="q_button q_link" to={path}>
      {children}
    </Link>
  )
}

export default QLink
