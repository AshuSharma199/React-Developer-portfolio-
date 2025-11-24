import About from "./Componants/About/About."
import Contact from "./Componants/Contact/Contact"
import Experience from "./Componants/Experience/Experience"
import Footer from "./Componants/Footer/Footer"
import Home from "./Componants/Home/Home"
import Navbar from "./Componants/Navbar"
import Projects from "./Componants/Projects/Projects"

function App() {

  return (
    <div className="bg-[#1C1C1C] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
