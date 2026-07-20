import './Menu.css'
import { useMemo, useState } from 'react'

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

const Menu = ({ whatsappNumber, menuCategories = [], onOrder = () => { } }) => {
  const categories = Array.isArray(menuCategories) ? menuCategories : []
  const [activeCategory, setActiveCategory] = useState('All')
  const [cartItems, setCartItems] = useState([])

  const categoryTitles = ['All', ...categories.map((c) => c.title)]

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((entry) => entry.id === item.id)
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (item) => {
    setCartItems((prev) =>
      prev.reduce((next, entry) => {
        if (entry.id !== item.id) return [...next, entry]
        const quantity = entry.quantity - 1
        return quantity > 0 ? [...next, { ...entry, quantity }] : next
      }, [])
    )
  }

  const cartTotalItems = useMemo(
    () => cartItems.reduce((sum, entry) => sum + entry.quantity, 0),
    [cartItems]
  )

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, entry) => {
      if (typeof entry.price === "number") {
        return sum + entry.price * entry.quantity;
      }
      return sum;
    }, 0);
  }, [cartItems]);

  const buildCartText = () => {
    if (!cartItems.length) return "";

    const lines = cartItems.map((entry) => {
      // Item price text
      const priceLabel =
        typeof entry.price === "number"
          ? formatAmount(entry.price)
          : formatPrices(entry.prices);

      // Item total
      const itemTotal =
        typeof entry.price === "number"
          ? ` = ${formatAmount(entry.price * entry.quantity)}`
          : "";

      return `- ${entry.quantity} × ${entry.name} (${priceLabel})${itemTotal}`;
    });

    return `Hello Hot & Cold Cafe, please take my order:

🛒 Order Details

${lines.join("\n")}

-----------------------
💰 Total: ${formatAmount(cartTotal)}

Thank you! 😊`;
  };

  const handleCartOrder = () => {
    if (!cartItems.length) return
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildCartText())}`
    window.open(url, '_blank')
  }

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

      <div className="menu-layout">

        {/* Left Side - Menu */}
        <div className="menu-content">
          {categories
            .filter(
              (category) =>
                activeCategory === "All" || category.title === activeCategory
            )
            .map((category) => (
              <div key={category.id} className="menu-category">
                <h3 className="menu-category-title">{category.title}</h3>

                <div className="menu-grid">
                  {Array.isArray(category.items) &&
                    category.items.map((item) => {
                      const priceLabel = item.price
                        ? formatAmount(item.price)
                        : formatPrices(item.prices);

                      return (
                        <article key={item.id} className="special-card">
                          <div className="special-media">
                            {item.isSpecial && (
                              <span className="special-badge">
                                ★ Special
                              </span>
                            )}

                            <img
                              src={
                                item.image ||
                                item.imageSource ||
                                placeholderImage
                              }
                              alt={item.name}
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = placeholderImage;
                              }}
                            />
                          </div>

                          <div className="special-body">
                            <h4>{item.name}</h4>

                            {item.type ? (
                              <p className="item-type">{item.type}</p>
                            ) : (
                              <p className="special-desc">
                                {item.description ||
                                  formatPrices(item.prices)}
                              </p>
                            )}

                            <div className="special-footer">
                              <span className="special-price">
                                {priceLabel}
                              </span>

                              <div className="footer-actions">
                                <div className="quantity-controls">
                                  <button
                                    type="button"
                                    className="quantity-btn"
                                    onClick={() => removeFromCart(item)}
                                    disabled={
                                      !cartItems.some(
                                        (entry) => entry.id === item.id
                                      )
                                    }
                                  >
                                    −
                                  </button>

                                  <span className="item-qty">
                                    {cartItems.find(
                                      (entry) => entry.id === item.id
                                    )?.quantity || 0}
                                  </span>

                                  <button
                                    type="button"
                                    className="quantity-btn"
                                    onClick={() => addToCart(item)}
                                  >
                                    +
                                  </button>
                                </div>

                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => onOrder(item)}
                                >
                                  Order
                                </button>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                </div>
              </div>
            ))}
        </div>

        {/* Right Side - Sticky Cart */}
        {cartItems.length > 0 && (
          <aside className="cart-sidebar">
            <div className="cart-summary">
              <div className="cart-header">
                <h3>Your Order</h3>
                <span className="cart-items-count">
                  {cartTotalItems} items
                </span>
              </div>

              <div className="cart-items-list">
                {cartItems.map((entry) => {
                  const pricePerUnit =
                    typeof entry.price === "number"
                      ? entry.price
                      : 0;

                  const itemTotal =
                    pricePerUnit * entry.quantity;

                  return (
                    <div key={entry.id} className="cart-item">
                      <div className="cart-item-info">
                        <span className="cart-item-name">
                          {entry.name}
                        </span>

                        <span className="cart-item-qty">
                          × {entry.quantity}
                        </span>
                      </div>

                      <span className="cart-item-price">
                        {typeof entry.price === "number"
                          ? `₹${itemTotal}`
                          : "N/A"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="cart-divider"></div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span className="total-label">
                    Total
                  </span>

                  <span className="total-amount">
                    ₹{cartTotal}
                  </span>
                </div>

                <button
                  className="btn btn-primary btn-order"
                  type="button"
                  onClick={handleCartOrder}
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>
          </aside>
        )}

      </div>
    </section>
  )
}

export default Menu
