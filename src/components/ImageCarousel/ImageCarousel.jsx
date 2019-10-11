import React, { useState } from 'react'

import './imagecarousel.css'
import QButton from '../QButton/QButton'

function ImageCarousel({ photos }) {
  const [position, setPosition] = useState(0)

  const changePhoto = newPosition => {
    console.log(photos.length)
    if (newPosition > photos.length - 1) {
      setPosition(0)
    } else if (newPosition === -1) {
      setPosition(photos.length - 1)
    } else {
      setPosition(newPosition)
    }
  }

  return (
    <div className="carousel_container">
      <div className="carousel_controls">
        <QButton
          type="q_button btn_carousel btn_carousel_left"
          action={() => changePhoto(position - 1)}
        >
          next
        </QButton>
        <img src={photos[position].large} alt="animal" />
        <QButton
          type="q_button btn_carousel btn_carousel_right"
          action={() => changePhoto(position + 1)}
        >
          prev
        </QButton>
      </div>
    </div>
  )
}

export default ImageCarousel
