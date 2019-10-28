/** @jsx jsx */
import { jsx } from '@emotion/core'
import { QLinkImg } from './index'
import { css, keyframes } from '@emotion/core'

const Spin = keyframes`
  to { 
    transform: rotate(360deg);
  }
`

const QSpinningPoodle = () => {
  return (
    <QLinkImg path="/">
      <span
        css={css`
          font-size: 20px;
          transition: all 400ms;
          display: inline-block;

          &:hover {
            font-size: 30px;
            transition: all 400ms;
            animation: 1s ${Spin} linear infinite;
          }
        `}
        aria-label="logo"
        role="img"
      >
        🐩
      </span>
    </QLinkImg>
  )
}

export default QSpinningPoodle
