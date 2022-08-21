import { Link } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import './index.scss';
const Home = () => {
  <div className="conatiner homePage">
    <div className="textZone">
      <h1>
        Hi, <br /> I'm
        <img src={LogoS} alt='' /> 
        <br />
        Front-end Developer / Javascript
        <Link to='/contact' className='flatButton'>CONTACT ME</Link>
      </h1>
    </div>
  </div>
}

export default Home
