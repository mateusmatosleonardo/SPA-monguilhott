import { About } from '../components/About'
import { Differences } from '../components/Differences'
import { Differentials } from '../components/Differentials'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { Steps } from '../components/Steps'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Differentials />
      <About />
      <Steps />
      <Differences />
    </main>
  )
}
