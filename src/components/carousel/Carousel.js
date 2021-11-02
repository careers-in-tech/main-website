import React, { useState } from 'react'

/* Module style */
import './Carousel.css'

import back from '../../assets/icons/back-icon.png'
import forward from '../../assets/icons/forward-icon.png'

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
      <button
        onClick={() => {
          updateIndex(activeIndex - 1)
        }}
      >
        <img alt="arrow" src={back} className="arrow-1" />
      </button>

      <button
        onClick={() => {
          updateIndex(activeIndex + 1)
        }}
      >
        <img alt="arrow" src={forward} className="arrow-2" />
      </button>
    </div>
  )
}

export default Carousel
