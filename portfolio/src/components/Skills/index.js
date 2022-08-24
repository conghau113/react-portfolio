import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import AnimatedSphere from '../AnimatedSphers'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterclass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <div className="container skillsPage">
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills & Experience'.split('')}
              idx={['Skills & Experience'.split('')].length * 1}
            />
          </h1>
          <p>
            <span>Front-End:</span> Javascript, HTML5, CSS3, SASS, TailwindCSS,
            Bootstrap, ReactJS(hooks), Redux.{' '}
          </p>
          <p>
            <span>Back-End:</span> NodeJS, ExpressJS.
          </p>
          <p>
            <span>Databases:</span> SQL server, MongoDB, MySQL.
          </p>
          <p>
            <span>UX/UI & Editor:</span> Figma, Photoshop, Premiere.
          </p>
          <p>
            <span>Others:</span> Trello, Git, Postman.
          </p>
        </div>
        <div className="animatedZone">
          <AnimatedSphere className="animatedTagCloude" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
