import './Slide4.css'
import image from '../assets/images/joinUs.png'
import Button from './Button'

const Slide4 = () => {
  return (
    <section className="slide4">
      <div className="left">
        <div className="slide4__container__text">
          <h2 className="slide4__container__text__h2">Join us!</h2>
          <p className="slide4__container__text__p">
            Want to pivot into tech? Not sure where to go from here? Start up
            your tech career with a group that{' '}
            <span className="strongColored">gets it</span>. We exist to help
            orient and bridge budding career paths into the tech ecosystem.
            <span className="emphasized"> Ready to start?</span>
          </p>
          <p className="slide4__container__text__p">
            Work in tech? Want to help other succeed in their pivot? Join us as
            an advisor.
          </p>
          <div className="buttonGroup">
            <Button
              text="Become a Member"
              link="https://docs.google.com/forms/d/18mJXKqK5TPIoRmFZhop529CF8f865N_o3c2Bsw2TsTA"
              color="turquoise"
            />
            <Button
              text="Become an Advisor"
              link="https://docs.google.com/forms/d/1Tqj4OvfrIGQDQYOT4bv5lShbldFWM8TAyMc-MuNdPUQ"
              color="gray"
            />
          </div>
        </div>
      </div>

      <div className="right">
        <img src={image} alt="" className="slide__container__image" />
      </div>
    </section>
  )
}

export default Slide4
