import { useState } from 'react'
import './Contact.css'

const Contact = ({ whatsappNumber = '916398629093' }) => {
  const [copied, setCopied] = useState(false)
  const instagramUrl = 'https://www.instagram.com/hot__and_cold_cafe__?igsh=MTZjeGNwenYxdWg5Zw=='
  const googleMapsUrl = 'https://www.google.com/maps/place/Tha+Hot+%26+Cold/@29.0163798,79.3831518,17z/data=!3m1!4b1!4m6!3m5!1s0x39a081b9a1575c59:0x7ce9f7bf6dddcf63!8m2!3d29.0163798!4d79.3831518!16s%2Fg%2F11x14747_y'

  const copyAddress = () => {
    navigator.clipboard.writeText('Tha Hot & Cold Cafe, Near Main Market, City Center')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div className="contact-page page-section">
      {/* Header */}
      <header className="contact-hero">
        <span className="contact-badge-pill">📍 FIND OUR STORE</span>
        <h1 className="contact-title">Visit & Contact Us</h1>
        <p className="contact-subtitle">
          Experience hot sizzlers, cool shakes, and warm hospitality at Tha Hot & Cold.
        </p>
      </header>

      {/* Free Delivery Ribbon */}
      <div className="pro-delivery-ribbon">
        <div className="ribbon-badge">
          <span className="ribbon-icon">🛵</span>
          <div className="ribbon-text">
            <strong>FREE HOME DELIVERY</strong>
            <span>Delivering hot & fresh food within 3 KM radius</span>
          </div>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Hot & Cold Cafe, please deliver to my address!')}`}
          target="_blank"
          rel="noreferrer"
          className="ribbon-btn"
        >
          Order Delivery Now ➔
        </a>
      </div>

      {/* Main 2-Column Location & Info Showcase */}
      <div className="pro-location-grid">
        {/* Left Column: Location & Contact Details */}
        <div className="location-info-card">
          <div className="info-header">
            <span className="store-tag">STORE LOCATION</span>
            <h2>Tha Hot & Cold Cafe</h2>
            <p className="address-text">
              📍 Near Main Market, Food Street, City Center, India
            </p>
          </div>

          <div className="info-details-list">
            {/* Hours */}
            <div className="info-item">
              <div className="item-icon">🕒</div>
              <div className="item-content">
                <span className="item-label">Opening Hours</span>
                <strong className="item-val">Mon – Sun: 10:00 AM — 10:00 PM</strong>
              </div>
            </div>

            {/* Phone */}
            <div className="info-item">
              <div className="item-icon">📞</div>
              <div className="item-content">
                <span className="item-label">Phone & Delivery Line</span>
                <a href={`tel:+${whatsappNumber}`} className="item-link">
                  +91 63986 29093
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="info-item">
              <div className="item-icon">📸</div>
              <div className="item-content">
                <span className="item-label">Instagram Handle</span>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="item-link">
                  @hot__and_cold_cafe__
                </a>
              </div>
            </div>
          </div>

          {/* Quick Professional Action Buttons */}
          <div className="pro-action-bar">
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="pro-btn maps-btn">
              🗺️ Get Directions ↗
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="pro-btn wa-btn">
              💬 Order WhatsApp
            </a>
            <button type="button" onClick={copyAddress} className="pro-btn copy-btn">
              {copied ? '✓ Copied Address!' : '📋 Copy Address'}
            </button>
          </div>
        </div>

        {/* Right Column: High-Tech Map Canvas */}
        <div className="location-map-card">
          <div className="map-card-header">
            <div className="map-status">
              <span className="pulse-dot"></span>
              <span>LIVE LOCATION PIN</span>
            </div>
            <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="map-external-link">
              View on Google Maps ↗
            </a>
          </div>

          <div className="map-canvas-container">
            <iframe
              title="Tha Hot & Cold Cafe Location Map"
              src="https://maps.google.com/maps?q=29.0163798,79.3831518&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
