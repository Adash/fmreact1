import React from 'react'

import BoardOne from './BoardOne'
import BoardTwo from './BoardTwo'

import './cssbox.css'

function CssBox({ cssState }) {
  if (cssState === '1') {
    return (
      <div className="css_box">
        <BoardOne />
      </div>
    )
  } else if (cssState === '2') {
    return (
      <div className="css_box">
        <BoardTwo />
      </div>
    )
  } else {
    return (
      <div className="css_box">
        <p>board number not recognised</p>
      </div>
    )
  }
}

export default CssBox
