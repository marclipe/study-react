import { Outlet, Link } from "react-router-dom";
import '../../../style.scss'
import './styles.scss'

export const Layout = () => {
  return (
    <>
      <div className="layout-container">
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/jsx">JSX</Link>
            </li>
            <li>
              <Link to="/state">State</Link>
            </li>
            <li>
              <Link to="/prop">Props</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    </>
  )
} 