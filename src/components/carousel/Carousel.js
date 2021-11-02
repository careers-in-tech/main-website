import React, { useState } from 'react'

/* Module style */
import './Carousel.less'
import rightArrow from '../assets/icons/showmore1.png'
import leftArrow from '../assets/icons/showmore2.png'

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
      <div className="wrap">
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
          <img alt="arrow" src={leftArrow} className="arrow-1" />
        </button>

        <button
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          <img alt="arrow" src={rightArrow} className="arrow-2" />
        </button>
      </div>
    </div>
  )
}

export default Carousel
