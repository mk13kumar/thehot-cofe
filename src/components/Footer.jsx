import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer({ whatsappNumber }) {
  return (
    <footer className="page-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <p className="brand">The Hot & Cold</p>
          <p className="brand-subtitle">
            Garam, masaledar aur dil se banaya hua khana — delivered fast.
          </p>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <nav>
            <NavLink to="/" className="footer-link">
              Home
            </NavLink>
            <NavLink to="/menu" className="footer-link">
              Menu
            </NavLink>
            <NavLink to="/gallery" className="footer-link">
              Gallery
            </NavLink>
            <NavLink to="/about" className="footer-link">
              About
            </NavLink>
            <NavLink to="/contact" className="footer-link">
              Contact
            </NavLink>
          </nav>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            <a
              className="contact-link"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Hot & Cold Cafe, please take my order.')}`}
              target="_blank"
              rel="noreferrer"
            >
              +91 63986 29093
            </a>
          </p>
          <p>Near Local Market, Your City</p>
        </div>

        <div className="footer-hours">
          <h4>Hours</h4>
          <p>Mon–Sun: 10:00 — 22:00</p>
          <p>Free delivery within 3 km</p>
        </div>
      </div>

      <div className="footer-bottom">© {new Date().getFullYear()} The Hot & Cold — All rights reserved</div>
    </footer>
  )
}

export default Footer
