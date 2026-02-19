import Form from '../Form'
import MissionText from '../MissionText'
import MusicBox from '../MusicBox'
import SocialMedia from '../SocialMedia'
import Text from '../Text'
import Title from '../Title'
import VideoPlay from '../VideoPlay'
import Footer from './Footer'

function Main() {
  return (
    <div>
      <VideoPlay />
      <Title />
      <Text />
      <MusicBox />
      <MissionText />
      <Form />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default Main
