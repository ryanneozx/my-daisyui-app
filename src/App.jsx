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
  const [count, setCount] = useState(0)

  return (
    <Navbar>
      <Hero1></Hero1>
      <About></About>
      <Experience></Experience>
      <Experience2></Experience2>
      <Projects></Projects>
          <div className="p-6">

            <h1 className="text-3xl font-bold text-center">Hello DaisyUI!</h1>
            
            <button className="btn btn-secondary mt-4">Click Me</button>
            <button className="btn btn-accent">Button</button>
          </div>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
    </Navbar>
  )
}


export default App
