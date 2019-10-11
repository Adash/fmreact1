import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'
import themeContext from './components/ContextProviders/themeContext'

const AppWrapper = () => {
  const themeHook = useState({ main: '#282c34' })
  return (
    <themeContext.Provider value={themeHook}>
      <App />
    </themeContext.Provider>
  )
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
