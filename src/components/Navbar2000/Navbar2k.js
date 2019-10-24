/** @jsx jsx */
import { jsx } from '@emotion/core'
import { QLink, QLinkImg } from '../QButtons'
import css from '@emotion/css/macro'
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
      </div>
      <QLinkImg path="/">
        <span
          css={css`
            font-size: 20px;
            transition: all 400ms;
            &:hover {
              font-size: 30px;
              transition: all 400ms;
            }
          `}
          aria-label="logo"
          role="img"
        >
          🐩
        </span>
      </QLinkImg>
    </header>
  )
}

export default Navbar2k
