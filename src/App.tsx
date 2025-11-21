import Navbar from './components/navbar'
import HeroVideo from './components/HeroVideo'
import Features from './components/Features'
import Catalog from './components/Catalog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroVideo />
      <Catalog/>
      <Features />
      <Contact />
    </div>
  )
}

export default App