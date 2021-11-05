import React from 'react'
import './Slide3.css'
import bulb from '../assets/images/icon_bulb.png'
import people from '../assets/images/icon_people.png'
import watch from '../assets/images/icon_pace.png'

import Carousel from './carousel/Carousel'
import CarouselItem from './carousel/CarouselItem'

const content = [
  {
    img: bulb,
    title: ' orient yourself',
    text: 'Not sure where to start? Don’t worry, we’ve been there. Learn about the tech scene and start looking into where you can find your niche.',
  },

  {
    img: people,
    title: 'find your people',
    text: 'We all came for the tech scene, but we all stay because of the supportive community who made this possible. Learn from experts through weekly webinars and online coffee ‘dates’.',
  },
  {
    img: watch,
    title: 'at your pace',
    text: 'Access all resources that work best for you. From weekly zoom calls to a dedicated Slack group join us when it works best for you.',
  },
]

const Slide3 = () => {
  return (
    <section className="slide3">
      <div className="slide3__container">
        <h2 className="slide3__container__h2">What we offer</h2>
        <p className="slide3__container__p">
          Our goal is to help mid-level professionals (from all backgrounds!)
          pivot into fulfilling careers in the growing tech sector.
        </p>
        <div className="slide3__container__offerings__desktop">
          {content.map((content) => {
            return (
              <>
                <div className="slide3__container__offerings-size">
                  <img src={content.img} alt="Light Bulb" />
                  <h3 className="slide3__container__offerings__h3">
                    {content.title}
                  </h3>
                  <p className="slide3__container__offerings__p">
                    {content.text}
                  </p>
                </div>
                <div className="slide3__container__offerings__line"></div>
              </>
            )
          })}
        </div>
        <div className="slide3__container__offerings__mobile">
          <Carousel>
            <CarouselItem>
              <div className="slide3__carousel">
                <div className="carousel__image">
                  <img src={content[0].img} alt="Light Bulb" />
                </div>
                <h3 className="slide3__carousel__h3">{content[0].title}</h3>
                <p className="slide3__carousel__p">{content[0].text}</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="slide3__carousel">
                <div className="carousel__image">
                  <img src={content[1].img} alt="Light Bulb" />
                </div>
                <h3 className="slide3__carousel__h3">{content[1].title}</h3>
                <p className="slide3__carousel__p">{content[1].text}</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="slide3__carousel">
                <div className="carousel__image">
                  <img src={content[2].img} alt="Light Bulb" />
                </div>
                <h3 className="slide3__carousel__h3">{content[2].title}</h3>
                <p className="slide3__carousel__p">{content[2].text}</p>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Slide3
