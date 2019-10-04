import React from 'react'
import './QButton.css'

export function QButton(props) {
  return (
    <button onClick={props.action} className="q_button_basic">
      {props.children}
    </button>
  )
}
