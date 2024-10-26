import { Navbar } from "./components"
import { Banner, Features, ChoosePlan, GlobalNetwork } from "./sections"
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Features />
      <div className="bg-lightWhite">
        <ChoosePlan />
        <GlobalNetwork />
      </div>
    </div>
  )
}

export default App
