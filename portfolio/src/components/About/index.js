import { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterclass] = useState('text-animate')
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container aboutPage">
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <br />
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <br />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
