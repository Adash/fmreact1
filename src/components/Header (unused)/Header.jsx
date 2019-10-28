import React from 'react'
import { QLink } from '../QButtons'
import { Router } from '@reach/router'
import { QSwitch } from '../QButtons/'

import './header.css'

const Header = ({ cssState, setCssState, options }) => (
  <header className="q_header">
    <QLink path="/">Home</QLink>
    <QLink path="selecttheme">Select Theme</QLink>
    <QLink path="cssbox">CSS Box</QLink>
    <Router>
      <QSwitch
        cssState={cssState}
        setCssState={setCssState}
        options={options}
        path="cssbox"
      />
    </Router>
  </header>
)

export default Header
