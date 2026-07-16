import './Home.css'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const formatAmount = (value) => {
   if (typeof value === 'number') return `₹${value}`
   if (typeof value === 'string') {
      if (value.includes('₹')) return value
      if (/^\d+$/.test(value)) return `₹${value}`
      return value
   }
   return ''
}

const formatPrices = (prices) => {
   if (!prices || typeof prices !== 'object') return ''
   return Object.entries(prices)
      .filter(([, v]) => v !== null && v !== undefined && v !== '')
      .map(([k, v]) => `${k === 'half' ? 'Half' : k === 'full' ? 'Full' : k}: ${formatAmount(v)}`)
      .join(' / ')
}

const Home = ({ whatsappNumber, heroImage, specialItems = [] }) => {
   const specials = useMemo(() => specialItems || [], [specialItems])

   const orderLink = (item) => {
      const priceLabel = item.price || formatPrices(item.prices)
      const text = `Hello the hot & cold cafe, please take my order:\n- Item: ${item.name}\n- Price: ${priceLabel}`
      return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
   }

   return (
      <div className="home-container">
         {/* Hero Section */}
         <section className="hero-section">
            <div className="hero-content">
               <div className="hero-text">
                  <h1 className="hero-title">
                     The Hot &
                     <br />
                     Cold Cafe
                  </h1>

                  <p className="hero-subtitle">
                     Fresh Taste • Quality Service • Best Experience
                  </p>

                  <div className="hero-buttons">
                     <Link to="/menu" className="btn btn-primary">
                        VIEW MENU
                     </Link>

                     <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Hot & Cold Cafe, please take my order.')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                     >
                        ORDER ON WHATSAPP
                     </a>
                  </div>
                  <div>
                     <h3>FREE HOME DELIVERY</h3>
                     <h4 className="feature-desc">Within 3 KM</h4>
                  </div>

               </div>
               <div className="hero-image">
                  <img src={heroImage} alt="Delicious restaurant food" />
               </div>
            </div>
         </section>

         {/* Special Picks Section */}
         <section className="special-section page-section">
            <h2>Today's Delicious Picks</h2>
            {/* <p className="special-sub">Fresh, hot and bursting with flavour — made to tempt your appetite. आज़माइए और लज़्ज़त पायें!</p> */}
            <div className="special-grid">
               {specials.map((item) => (
                  <div key={item.id} className="special-card">
                     <div className="special-media">
                        {item.isSpecial && <span className="special-badge">★ Special</span>}
                        <img src={item.image || item.imageSource} alt={item.name} loading="lazy" />
                     </div>
                     <div className="special-body">
                        <h4>{item.name}</h4>
                        <p className="special-desc">{item.description || formatPrices(item.prices)}</p>
                        <div className="special-footer">
                           <span className="special-price">{item.price ? formatAmount(item.price) : formatPrices(item.prices)}</span>
                           <a className="btn btn-primary" href={orderLink(item)} target="_blank" rel="noreferrer">Order</a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

      </div>
   )
}

export default Home
