import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import ContactUs from './components/ContactUs'
import Merch from './components/Merch'
import Cart from './components/Cart'
import { ShopProvider } from './contexts/ShopContext'

function App() {
  return (
    <ShopProvider>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ShopProvider>
  )
}

export default App
