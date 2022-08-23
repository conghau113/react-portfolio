import Loader from 'react-loaders'
import './index.scss'

const Work = () => {
  return (
    <>
      <div className="container portfolioPage">
        <h1 className="page-title">My work</h1>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Work
