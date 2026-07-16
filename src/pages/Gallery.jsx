import './Gallery.css'

const Gallery = ({ galleryItems }) => {
  return (
    <section className="gallery-section page-section">
      <h2>Gallery</h2>
      <p>Enjoy a glimpse of the flavors, ambience, and happy moments at The Hot & Cold.</p>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.id} className="gallery-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Gallery
