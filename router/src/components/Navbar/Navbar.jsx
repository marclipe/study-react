import '../Navbar/styles.css'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
      <h1>Social Medias &#x1F4BB;</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/instagram">Instagram</Link>
        <Link to="/twitter">Twitter</Link>
        <Link to="/facebook">Facebook</Link>
      </nav>
    </header>
  );
}