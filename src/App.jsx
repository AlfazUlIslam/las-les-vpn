import { Navbar } from "./components"
import { Banner, Features, ChoosePlan } from "./sections"
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Features />
      <div className="bg-lightWhite">
        <ChoosePlan />
      </div>
    </div>
  )
}

export default App
