import React from 'react'
import './Slide3.css'
import bulb from '../assets/images/icon_bulb.png'
import people from '../assets/images/icon_people.png'
import watch from '../assets/images/icon_pace.png'

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
        <div className="slide3__container__offerings">
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
      </div>
    </section>
  )
}

export default Slide3

// <div className="mobile-view">
// <Carousel>
//   <CarouselItem>
//     <InfoBlock
//       img={content[0].img}
//       mobileImg={content[0].mobileImg}
//       bodyText={content[0].bodyText}
//       buttonText={content[0].buttonText}
//       link={content[0].link}
//     />
//   </CarouselItem>
//   <CarouselItem>
//     <InfoBlock
//       img={content[1].img}
//       mobileImg={content[1].mobileImg}
//       bodyText={content[1].bodyText}
//       buttonText={content[1].buttonText}
//       link={content[1].link}
//     />
//   </CarouselItem>
//   <CarouselItem>
//     <InfoBlock
//       img={content[2].img}
//       mobileImg={content[2].mobileImg}
//       bodyText={content[2].bodyText}
//       buttonText={content[2].buttonText}
//       link={content[2].link}
//     />
//   </CarouselItem>
//   <CarouselItem>
//     <InfoBlock
//       img={content[3].img}
//       mobileImg={content[3].mobileImg}
//       bodyText={content[3].bodyText}
//       buttonText={content[3].buttonText}
//       link={content[3].link}
//     />
//   </CarouselItem>
// </Carousel>
// </div>
