import { NavLink } from 'react-router-dom'

const Header = ({ whatsappNumber }) => {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <div className="logo" aria-hidden>
          HC
        </div>
        <div>
          <p className="brand">The Hot & Cold</p>
          <p className="brand-subtitle">Restaurant WhatsApp Ordering</p>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Menu
        </NavLink>
        <NavLink to="/gallery" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Gallery
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          Contact
        </NavLink>
      </nav>

      <div className="header-cta">
        <a
          className="order-btn small"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Hot & Cold Cafe, please take my order.')}`}
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
