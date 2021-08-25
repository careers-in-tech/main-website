import React from 'react'
import './slide3.css'
import bulb from '../assets/images/icon_bulb.png'
import people from '../assets/images/icon_people.png'
import watch from '../assets/images/icon_pace.png'

const Slide3 = () => {
  return (
    <section className="slide3">
      <div className="slide3__container">
        <h2 className="slide3__container__h2">What we offer</h2>
        <p className="slide3__container__p">
          Our goal is to help mid-level professionals (from all backgrounds!)
          pivot into fulfilling careers in the growing tech sector.
        </p>
        <div className="slide3__container__offerings">
          <div className="slide3__container__offerings-size">
            <img src={bulb} alt="Light Bulb" />
            <h3 className="slide3__container__offerings__h3">
              orient yourself
            </h3>
            <p className="slide3__container__offerings__p">
              Not sure where to start? Don’t worry, we’ve been there. Learn
              about the tech scene and start looking intp where you can find
              your niche.
            </p>
          </div>
          <div className="slide3__container__offerings__line"></div>
          <div className="slide3__container__offerings-size">
            <img src={people} alt="people icon" />
            <h3 className="slide3__container__offerings__h3">
              find your people
            </h3>
            <p className="slide3__container__offerings__p">
              We all came for the tech scene, but we all stay because of the
              supportive community who made this possible. Learn from experts
              through weekly webinars and online coffee ‘dates’.
            </p>
          </div>
          <div className="slide3__container__offerings__line"></div>
          <div className="slide3__container__offerings-size">
            <img src={watch} alt="watch face" />
            <h3 className="slide3__container__offerings__h3">at your pace</h3>
            <p className="slide3__container__offerings__p">
              Access all resources that work best for you. From weekly zoom
              calls to a dedicated Slack group join us when it works best for
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slide3
