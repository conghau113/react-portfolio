import './index.scss'
import { TagCloud } from 'react-tagcloud'

const AnimatedSphere = () => {
  const data = [
    { value: 'JavaScript', count: 38 },
    { value: 'ReactJS', count: 30 },
    { value: 'HTML5', count: 33 },
    { value: 'CSS3', count: 30 },
    { value: 'SASS', count: 32 },
    { value: 'Bootstrap', count: 24 },
    { value: 'TailwindCSS', count: 27 },
    { value: 'Webpack', count:20 },
    { value: 'Redux', count:28 },
    { value: 'Nodejs', count: 22 },
    { value: 'Express.js', count: 25 },
    { value: 'React Router', count: 25 },
    { value: 'Figma', count: 20 },
    { value: 'Photoshop', count: 22 },
    { value: 'Premiere Pro', count: 20 },
    { value: 'SQL Server', count: 25 },
    { value: 'MongoDB', count: 18 },
    { value: 'NPM', count: 20 },
  ]

  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 5}s`,
        fontSize: `${size / 2}em`,
        border: `2px solid ${color}`,
        margin: '3px',
        padding: `3px 15px`,
        display: 'flex',
        color: 'white',
        boxSizing: 'border-box',
      }}
    >
      {tag.value}
    </span>
  )
  return (
    <>
      <TagCloud tags={data} minSize={2} maxSize={5} renderer={customRenderer} />
    </>
  )
}

export default AnimatedSphere
