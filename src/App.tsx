import Articles from "./components/articles/Articles"
import Digibank from "./components/digibank/Digibank"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/nav/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Digibank/>
      <Articles/>
      <Footer/>
    </>
  )
}

export default App
