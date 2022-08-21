import { Link } from 'react-router-dom'
import './index.scss'
const Home = () => {
  return (
    <div className="container homePage">
      <div className="textZone">
        <h1>
          Hi, i'm CONG HAU,
          <br />
          web developer.
        </h1>
        <Link to="/contact" className="flatButton">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
