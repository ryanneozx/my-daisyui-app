import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero1 from './components/hero1'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Experience2 from './components/experience2'

function App() {

  return (
    <Navbar>
      <Hero1></Hero1>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
          <div className="p-6">

            <h1 className="text-3xl font-bold text-center">Hello DaisyUI!</h1>
            
            <button className="btn btn-secondary mt-4">Click Me</button>
            <button className="btn btn-accent">Button</button>
          </div>
            <footer className="footer footer-center bg-base-100 text-base-content p-4">
              <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Ryan Neo.</p>
              </aside>
            </footer>
    </Navbar>
    
  )
}


export default App
