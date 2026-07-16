import './Contact.css'

const Contact = ({ whatsappNumber }) => {
  return (
    <section className="contact-section page-section">
      <h2>Contact</h2>
      <p>Get in touch for orders, enquiries, or delivery details.</p>
      <div className="contact-grid">
        <div className="contact-card">
          <h3>WhatsApp</h3>
          <p>
            <a
              className="contact-link"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Hot & Cold Cafe, Please take my order .')}`}
              target="_blank"
              rel="noreferrer"
            >
              +91 63986 29093
            </a>
          </p>
        </div>
        <div className="contact-card">
          <h3>Address</h3>
          <p>Near Local Market, Your City, India</p>
        </div>
        <div className="contact-card">
          <h3>Delivery</h3>
          <p>Free home delivery within 3 km. Fast, safe, and hot.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
