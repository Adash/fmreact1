import React from 'react'
import { QLink } from '../QButtons'

import './header.css'

const Header = () => (
  <header className="q_header">
    <QLink path="/">Home</QLink>
    <QLink path="selecttheme">Select Theme</QLink>
    <QLink path="cssbox">CSS Box</QLink>
  </header>
)

export default Header
