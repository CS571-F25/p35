import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Events from './components/Events'
import ContactUs from './components/ContactUs'
import Merch from './components/Merch'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />
      case 'about':
        return <AboutUs />
      case 'events':
        return <Events />
      case 'contact':
        return <ContactUs />
      case 'merch':
        return <Merch />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="site-title">UW-Madison Club Tennis</h1>
          <nav className="nav-tabs">
            <button
              className={`tab ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              Home
            </button>
            <button
              className={`tab ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About Us
            </button>
            <button
              className={`tab ${activeTab === 'events' ? 'active' : ''}`}
              onClick={() => setActiveTab('events')}
            >
              Events
            </button>
            <button
              className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Us
            </button>
            <button
              className={`tab ${activeTab === 'merch' ? 'active' : ''}`}
              onClick={() => setActiveTab('merch')}
            >
              Merch
            </button>
          </nav>
          <div className="cart-icon">
            <button className="cart-button">
              🛒
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </header>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
