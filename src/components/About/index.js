import { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import AnimatedSphereAbout from '../AnimatedSphereAbout'
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
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am a software engineering student at Ton Duc Thang University.
          </p>
          <br />
          <p align="LEFT">
            Currently, I am learning Front-end web with ReactJS framework and in
            the future, I want to be a web developer both in front-end and
            back-end.
          </p>
          <br />
          <p align="LEFT">
            In addition, I used to work as a designer, photographer, and editor
            for the school's event team (
            <a
              href="https://www.facebook.com/ted.team"
              rel="noreferrer"
              target="_blank"
            >
              TED-Ton Duc Thang University Event Development Team
            </a>
            ) from 2019 to 2022
          </p>
          <br />
          <p>
            You can visit my profile on{' '}
            <a
              href="https://github.com/conghau113"
              rel="noreferrer"
              target="_blank"
            >
              Githup
            </a>{' '}
            for more.
          </p>
        </div>
        <AnimatedSphereAbout className="sphereAbout" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
