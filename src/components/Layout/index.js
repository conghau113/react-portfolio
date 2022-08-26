import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags topTags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottomTags">&lt;/body&gt;</span>
        <br />
        <span className="tags bottomTagHtml">&lt;/html&gt;</span>
      </div>
    </div>
  )
}

export default Layout
