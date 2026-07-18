import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Menu from '../pages/Menu.jsx'
import Gallery from '../pages/Gallery.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'

const AppRoutes = ({ whatsappNumber, heroImage, specialItems, menuCategories, onOrder, galleryItems }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home whatsappNumber={whatsappNumber} heroImage={heroImage} specialItems={specialItems} />}
      />
      <Route
        path="/menu"
        element={<Menu whatsappNumber={whatsappNumber} menuCategories={menuCategories} onOrder={onOrder} />}
      />
      <Route path="/gallery" element={<Gallery galleryItems={galleryItems} />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact whatsappNumber={whatsappNumber} />} />
      <Route
        path="*"
        element={<Home whatsappNumber={whatsappNumber} heroImage={heroImage} specialItems={specialItems} />}
      />
    </Routes>
  )
}

export default AppRoutes
