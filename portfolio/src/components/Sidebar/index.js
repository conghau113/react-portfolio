import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import avaSidebar from '../../assets/images/NCH.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="navBar">
    <Link className="logo" to="/about">
      <img src={avaSidebar} alt="Công Hậu" />
    </Link>
    <h6 className="nameAva">Công Hậu</h6>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="aboutLink" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="portfolioLink" to="/mywork">
        <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
      </NavLink>
      <NavLink activeclassname="active" className="contactLink" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          href="https://www.facebook.com/conghau.nguyen.370515/"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/conghau113"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/c%C3%B4ng-h%E1%BA%ADu-nguy%E1%BB%85n-8815a1242/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>

      <li>
        <a
          href="mailto:conghau1132000@gmail.com"
          // onClick={() => {
          //   window.location = 'mailto:conghau1132000@gmail.com'
          // }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
