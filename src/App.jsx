import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import About from "./components/About";

export default function App() {
  return (
    <div className="relative overflow-x-hidden">

      <Nav />
      <LandingPage />
      <About/>

    </div>
  )
}