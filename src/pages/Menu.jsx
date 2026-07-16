import './Menu.css'
import { useState } from 'react'

const placeholderImage = 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=640&q=80'

const formatAmount = (value) => {
  if (typeof value === 'number') return `₹${value}`
  if (typeof value === 'string') {
    if (value.includes('₹')) return value
    if (/^\d+$/.test(value)) return `₹${value}`
    if (/^\d+\/\d+$/.test(value)) return value.split('/').map((v) => `₹${v}`).join('/')
    if (/^\d+\s*[-–/]\s*\d+$/.test(value)) return value.split(/\s*[-–/]\s*/).map((v) => `₹${v}`).join(' / ')
    return value
  }
  return value
}

const formatPrices = (prices) => {
  if (!prices) return ''
  return Object.entries(prices)
    .filter(([, value]) => value !== null && value !== undefined && value !== '')
    .map(([key, value]) => {
      const label = key === 'half' ? 'Half' : key === 'full' ? 'Full' : key
      return `${label}: ${formatAmount(value)}`
    })
    .join(' / ')
}

const Menu = ({ menuCategories = [], onOrder = () => {} }) => {
  const categories = Array.isArray(menuCategories) ? menuCategories : []
  const [activeCategory, setActiveCategory] = useState('All')

  const categoryTitles = ['All', ...categories.map((c) => c.title)]

  return (
    <section className="menu-section page-section">
      <h2>Our Full Menu</h2>

      <div className="menu-filters">
        {categoryTitles.map((title) => (
          <button
            key={title}
            className={`filter ${activeCategory === title ? 'active' : ''}`}
            onClick={() => setActiveCategory(title)}
          >
            {title}
          </button>
        ))}
      </div>

      {categories
        .filter((category) => activeCategory === 'All' || category.title === activeCategory)
        .map((category) => (
        <div key={category.id} className="menu-category">
          <h3 className="menu-category-title">{category.title}</h3>
          <div className="menu-grid">
            {Array.isArray(category.items) && category.items.map((item) => {
              const priceLabel = item.price ? formatAmount(item.price) : formatPrices(item.prices)
              return (
                <article key={item.id} className="menu-card">
                  <img
                    src={item.image || item.imageSource || placeholderImage}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => { e.target.src = placeholderImage }}
                  />
                  <div className="menu-card-body">
                    <div>
                      <h3>{item.name}</h3>
                      {item.type ? <p className="item-type">{item.type}</p> : <p>{item.description || formatPrices(item.prices)}</p>}
                    </div>
                    <div className="menu-footer">
                      <span className="price">{priceLabel}</span>
                      <button onClick={() => onOrder(item)}>
                        Order on WhatsApp
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Menu
