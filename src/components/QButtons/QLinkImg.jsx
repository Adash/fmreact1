/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from '@reach/router'
import css from '@emotion/css/macro'

const QLinkImg = ({ path, children }) => {
  return (
    <Link
      css={css`
        cursor: pointer;
        text-decoration: none;
      `}
      to={path}
    >
      {children}
    </Link>
  )
}

export default QLinkImg
