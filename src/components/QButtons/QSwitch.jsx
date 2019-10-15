import React from 'react'

import './qswitch.css'

const QSwitch = ({ cssState, setCssState, options }) => (
  <div>
    <form>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="1"
            checked={cssState === '1'}
            onChange={e => setCssState(e.target.value)}
          />
          {options[0]}
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="2"
            checked={cssState === '2'}
            onChange={e => setCssState(e.target.value)}
          />
          {options[1]}
        </label>
      </div>
    </form>
  </div>
)

export default QSwitch
