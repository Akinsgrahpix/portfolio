import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Serviceme from './component/Serviceme'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Serviceme />
      <Portfolio />
      <Contact />
    
    </div>
  )
}

export default App