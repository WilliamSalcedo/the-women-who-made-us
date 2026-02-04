import Form from '../Form'
import Navbar from '../Navbar'
import SocialMedia from '../SocialMedia'
import Text from '../Text'
import Title from '../Title'
import VideoPlay from '../VideoPlay'
import Footer from './Footer'

function Main() {
  return (
    <div>
      <Navbar />
      <VideoPlay />
      <Title />
      <Text />
      <Form />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default Main
