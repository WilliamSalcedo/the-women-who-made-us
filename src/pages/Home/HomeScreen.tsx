import Header from '../../components/layout/Header'
import VideoPlay from '../../components/VideoPlay'

export default function Home() {
  return (
    <section className="mx-4 my-6 sm:mx-8 md:mx-20 lg:mx-40 xl:mx-60">
      <Header />
      <VideoPlay />
    </section>
  )
}
