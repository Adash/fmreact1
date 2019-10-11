import React from 'react'
import './qbutton.css'

export function QButton(props) {
  return (
    <button onClick={props.action} className={props.type}>
      {props.children}
    </button>
  )
}
