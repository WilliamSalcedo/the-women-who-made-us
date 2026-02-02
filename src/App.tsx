import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/HomeScreen'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import PrivacyModal from './components/PrivacyModal'
import TermsModal from './components/TermsModal'


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/PrivacyModal' element={<PrivacyModal />} />
        <Route path='/TermsModal' element={<TermsModal />} />
      </Routes>
    </>
  )
}

export default App
