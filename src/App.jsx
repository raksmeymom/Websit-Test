import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { NavbarComponent } from './components/NavbarComponent'
import HomeComponent from './components/HomeComponent'
import { AboutComponent } from './components/AboutComponent'
import { FooterComponent } from './components/FooterComponent'
import ServiceComponent from './components/ServiceComponent';
import { PricingComponent } from './components/PricingComponent'
import ContactComponent from './components/ContactComponent'
import ServiceDetail from './components/ServiceDetail'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'

function App() {
  return (
    <Router>
      <>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent/>} />
          <Route path="/service" element={<ServiceComponent />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/pricing" element={<PricingComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Routes>
      </>
      <FooterComponent/>
    </Router>
    
  )
}

export default App
