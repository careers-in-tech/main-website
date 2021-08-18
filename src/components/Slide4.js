import './slide4.css'
import image from '../assets/images/joinUs.png'

const Slide4 = () => {
  return (
    <section className="slide4">
      <div className="left">
        <div className="slide4__container__text">
          <h2 className="slide4__container__text__h2">Join us!</h2>
          <p className="slide4__container__text__p">
            Want to pivot into tech? Not sure where to go from here? Start up
            your tech career with a group that gets it. We exist to help orient
            and bridge budding career paths into the tech ecosystem. Ready to
            start?
          </p>
          <p className="slide4__container__text__p">
            Work in tech? Want to help other succeed in their pivot? Join us as
            an advisor.
          </p>
        </div>
      </div>

      <div className="right">
        <img src={image} alt="" className="slide__container__image" />
      </div>
    </section>
  )
}

export default Slide4
