import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { Rules } from "./components/Rules";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">

      <Nav />
      <LandingPage />
      <About/>
      <Timeline/>
      <Rules />
      <Footer/>
    </div>
  )
}