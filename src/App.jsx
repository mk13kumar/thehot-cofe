import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import AppRoutes from './components/AppRoutes.jsx'
import {
  whatsappNumber,
  heroImage,
  menuCategories,
  galleryItems,
  specialItems,
  formatPriceLabel,
} from './data/appData.js'

function App() {
  const handleOrder = (item) => {
    const priceLabel = formatPriceLabel(item)
    const text = `Hello the hot & cold cafe, please take my order:\n- Item: ${item.name}\n- Price: ${priceLabel}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <BrowserRouter>
      <div className="page">
        <Header whatsappNumber={whatsappNumber} />
        <main>
          <AppRoutes
            whatsappNumber={whatsappNumber}
            heroImage={heroImage}
            specialItems={specialItems}
            menuCategories={menuCategories}
            onOrder={handleOrder}
            galleryItems={galleryItems}
          />
        </main>
        <Footer whatsappNumber={whatsappNumber} />
      </div>
    </BrowserRouter>
  )
}

export default App
