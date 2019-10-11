import React, { useContext } from 'react'
import themeContext from '../ContextProviders/themeContext'

const SelectTheme = () => {
  const [theme, setTheme] = useContext(themeContext)
  return (
    <div className="theme_selector">
      <label htmlFor="theme">
        Theme
        <select
          id="theme"
          value={theme.main}
          onChange={e => setTheme({ main: e.target.value })}
          onBlur={e => setTheme({ main: e.target.value })}
        >
          <option value="#282c34">Default</option>
          <option value="white">White</option>
          <option value="peru">Peru</option>
          <option value="darkblue">Dark Blue</option>
          <option value="chartreuse">Chartreuse</option>
          <option value="mediumorchid">Medium Orchid</option>
        </select>
      </label>
    </div>
  )
}

export default SelectTheme
