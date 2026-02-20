import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/HomeScreen'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import PrivacyModal from './components/PrivacyModal'
import MainLayout from './components/layout/MainLayout'
import History from './components/History'
import Production from './components/Production'
import Legal from './components/Legal'
import Collective from './components/Collective'
import TheVoices from './components/TheVoices'
import TheAnthems from './components/TheAnthems'
import TheMission from './components/TheMission'
import TheArchive from './components/TheArchive'


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
          <Route path="/TheAnthems" element={<TheAnthems />} />
          <Route path='/History' element={<History />} />
          <Route path='/TheProduction' element={<Production />} />
          <Route path='/TheCollective' element={<Collective />} />
          <Route path='/TheVoices' element={<TheVoices />} />
          <Route path='/TheMission' element={<TheMission />} />
          <Route path='/TheArchive' element={<TheArchive />} />
        </Route> 
      </Routes>
    </>
  )
}

export default App
