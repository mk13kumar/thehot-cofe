import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

const Gallery = ({ galleryItems = [] }) => {
  const items = Array.isArray(galleryItems) ? galleryItems : []
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const activeItem = lightboxIndex !== null ? items[lightboxIndex] : null

  const handlePrev = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') handlePrev(e)
      if (e.key === 'ArrowRight') handleNext(e)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, items])

  return (
    <div className="aesthetic-gallery page-section">
      {/* Creative Minimal Header */}
      <header className="gallery-header">
        <span className="gallery-accent-tag">✦ Visual Stories</span>
        <h1 className="gallery-main-title">Cafe Gallery</h1>
        <p className="gallery-tagline-text">Handcrafted dishes & cozy aesthetic vibes.</p>
      </header>

      {/* Cool Creative Staggered Grid */}
      <div className="gallery-creative-grid">
        {items.map((item, index) => (
          <figure
            key={item.id}
            className={`aesthetic-card card-variant-${(index % 3) + 1}`}
            onClick={() => setLightboxIndex(index)}
          >
            <div className="aesthetic-img-box">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="card-badge">{item.tag || item.category}</div>
            </div>
            <figcaption className="aesthetic-caption">
              <h3>{item.title}</h3>
              <span className="view-link">View Photo ↗</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Sleek Aesthetic Lightbox */}
      {activeItem && (
        <div className="aesthetic-modal" onClick={() => setLightboxIndex(null)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setLightboxIndex(null)}>
              ✕
            </button>

            <button className="modal-nav prev" onClick={handlePrev}>
              ❮
            </button>

            <div className="modal-preview">
              <img src={activeItem.image} alt={activeItem.title} />
              <div className="modal-meta">
                <span className="modal-tag">{activeItem.tag || activeItem.category}</span>
                <h2>{activeItem.title}</h2>
                <Link to="/menu" className="modal-btn" onClick={() => setLightboxIndex(null)}>
                  Order This Item 🍽️
                </Link>
              </div>
            </div>

            <button className="modal-nav next" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
