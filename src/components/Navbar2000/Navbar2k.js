/** @jsx jsx */
import { jsx } from '@emotion/core'
import { QLink, QSpinningPoodle } from '../QButtons'
import { css } from '@emotion/core'
import colors from '../SelectTheme/colors'

const Navbar2k = () => {
  return (
    <header
      css={css`
        padding: 10px;
        background-color: ${colors.default};
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div>
        <QLink path="/">Home</QLink>
        <QLink path="selecttheme">Select Theme</QLink>
        <QLink path="about">About</QLink>
        <QLink path="cssbox">Css Box</QLink>
      </div>
      <QSpinningPoodle />
    </header>
  )
}

export default Navbar2k
