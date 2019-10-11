import React, { useContext } from 'react'
import themeContext from '../ContextProviders/themeContext'

const SelectTheme = () => {
  const [theme, setTheme] = useContext(themeContext)
  return (
    <div className="theme_selector" style={{ backgroundColor: theme }}>
      <label htmlFor="theme">
        Theme
        <select
          id="theme"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          onBlur={e => setTheme(e.target.value)}
        >
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
