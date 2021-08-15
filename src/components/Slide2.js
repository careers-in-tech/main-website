import './slide2.css'
import image from '../Assets/images/UsGroup.png'

const Slide2 = () => {
  return (
    <section className="slide2">
      <div className="slide2_container">
        <img
          src={image}
          alt="cartoon depiction of group collaborating on a project"
          className="slide2_container_image"
        />

        <div className="slide2_container_text">
          <h2 className="slide2_container_text_h2">Who we are</h2>
          <p className="slide2_container_text_p">
            We're a welcoming community for professionals looking to transition
            their skills into new and innovative careers in tech.
          </p>
        </div>
      </div>
      <svg
        viewBox="0 0 1440 192"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-24 0L25.9333 5.3C75.8667 11 175.733 21 275.6 32C375.467 43 475.333 53 575.2 42.7C675.067 32 774.933 -2.86102e-06 874.8 10.7C974.667 21 1074.53 75 1174.4 106.7C1274.27 139 1374.13 149 1424.07 154.7L1474 160V192H1424.07C1374.13 192 1274.27 192 1174.4 192C1074.53 192 974.667 192 874.8 192C774.933 192 675.067 192 575.2 192C475.333 192 375.467 192 275.6 192C175.733 192 75.8667 192 25.9333 192H-24V0Z"
          fill="#EDF1F2"
        />
      </svg>
    </section>
  )
}

export default Slide2
