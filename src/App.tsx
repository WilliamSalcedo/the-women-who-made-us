import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/HomeScreen'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import PrivacyModal from './components/PrivacyModal'
import MusicDrawer from './components/MusicDrawer'
import MainLayout from './components/layout/MainLayout'
import History from './components/History'
import Production from './components/Production'
import Legal from './components/Legal'
import Collective from './components/Collective'


function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/PrivacyModal" element={<PrivacyModal />} />
          <Route path="/Legal" element={<Legal />} />
          <Route path="/MusicDrawer" element={<MusicDrawer />} />
          <Route path='/History' element={<History />} />
          <Route path='/TheProduction' element={<Production />} />
          <Route path='/TheCollective' element={<Collective />} />
        </Route> 
      </Routes>
    </>
  )
}

export default App
