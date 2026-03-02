
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import SocialMedia from '../SocialMedia'
import Form from '../Form'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main >
        <Outlet />
      </main>
      <Form />
      <SocialMedia />
      <Footer />
    </>
  )
}
