import { Navbar } from "./components"
import { Banner, Features, ChoosePlan, GlobalNetwork, Testimonials, Footer } from "./sections"
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
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}

export default App
