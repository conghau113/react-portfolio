import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import HomeImageBW from '../../assets/images/nch-bw.png'
import HomeImageW from '../../assets/images/nch-w.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Home = () => {
  const [letterClass, setLetterclass] = useState('text-animate')
  const nameArray = ['C', 'o', 'n', 'g', ' ', 'H', 'a', 'u']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container homePage">
        <div className="textZone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _9`}>i</span>
            <span className={`${letterClass} _10`}>,</span>
            <br />
            <span className={`${letterClass} _11`}>I</span>
            <span className={`${letterClass} _12`}>'</span>
            <span className={`${letterClass} _13`}>m</span>
            <span className={`${letterClass} _14`}> </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End / Javascript Developer.</h2>
          <Link to="/contact" className="flatButton">
            CONTACT ME
          </Link>
        </div>
        <div className="shapeZone">
          <div className="shapeZoneCircle">
            <img className="shapeZoneImage" src={HomeImageBW} alt="Công Hậu" />
            <img className="shapeZoneImageBack" src={HomeImageW} alt="Công Hậu" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
