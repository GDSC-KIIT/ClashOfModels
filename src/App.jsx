import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">

      <Nav />
      <LandingPage />
      <About/>
      <Timeline/>
      <Footer/>
    </div>
  )
}