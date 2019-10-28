/** @jsx jsx */
import { jsx } from '@emotion/core'
import { css } from '@emotion/core'
// import colors from '../SelectTheme/colors'

const AboutPage = () => {
  return (
    <div
      css={css`
        background-color: blueviolet;
        color: greenyellow;
        height: 100vh;
        width: 100vw;
      `}
    >
      <h2>About Page</h2>
    </div>
  )
}

export default AboutPage
