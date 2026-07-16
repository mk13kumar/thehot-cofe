import './About.css'

const About = () => {
  return (
    <section className="about-section page-section">
      <h2>About Us</h2>
      <p>
        The Hot & Cold is your neighborhood restaurant for fast, flavorful meals
        delivered fresh to your door. Hum apna khana ghar tak le aate hain with no fuss
        and no login required.
      </p>
      <div className="about-grid">
        <div className="about-card">
          <h3>Fresh & Authentic</h3>
          <p>Har dish banayi jaati hai with real spices, seasonal ingredients, and care.</p>
        </div>
        <div className="about-card">
          <h3>WhatsApp Ordering</h3>
          <p>Seedha WhatsApp par message bhejein and we start preparing your order.</p>
        </div>
        <div className="about-card">
          <h3>Quick Delivery</h3>
          <p>Free home delivery within 3 km, with warm meals delivered on time.</p>
        </div>
      </div>
    </section>
  )
}

export default About
