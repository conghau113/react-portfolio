import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import myworksData from '../../data/mywork.json'
import './index.scss'

const Work = () => {
  const [letterClass, setLetterclass] = useState('text-animate')
  const myworkText = 'My work'.split('')
  // console.log(mywork);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterclass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const renderMyworks = (myworks) => {
    return (
      <div className="imagesContainer">
        {myworks.map((mywork, index) => {
          return (
            <div className="imageBox" key={mywork.id}>
              <img
                className="myworkImage"
                src={mywork.cover}
                alt="Click to open!"
              />
              <div className="myworkContent">
                <p className="myworkTitle">{mywork.title}</p>
                <h4 className="myworkDes">{mywork.description}</h4>
                <button
                  className="myworkBtn"
                  onClick={() => window.open(mywork.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolioPage">
        <div className="textZone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={myworkText}
              idx={myworkText.length}
            />
          </h1>
        </div>
        <div>{renderMyworks(myworksData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
