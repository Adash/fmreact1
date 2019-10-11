import React from 'react'
import './qbutton.css'

const QButton = props => {
  return (
    <button onClick={props.action} className={props.type}>
      {props.children}
    </button>
  )
}

export default QButton
