import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'
import './index.scss'

const container = '.content'
const texts = [
  'JavaScript',
  'ReactJS',
  'HTML5',
  'CSS3',
  'Animation',
  'SASS',
  'Bootstrap',
  'TailwindCSS',
  'Redux',
  'React Router',
  'Nodejs',
  'Expressjs',
  'EmailJS',
  'Figma',
  'Photoshop',
  'MongoDB',
  'SQL Server',
]
const options = {
  radius: 350,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'slow',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true,
}

const WordCloud = () => {
  // to render wordcloud each time the page is reloaded
  useEffect(() => {
    TagCloud(container, texts, options)
  }, [])

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
