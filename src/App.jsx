import { Navbar } from "./components"
import { Banner, Features } from "./sections"
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Features />
    </div>
  )
}

export default App
