import  { useRef } from "react";
import Landing from "./components/Landing-Page";
import About from "./components/About";
import "./components/css/App.css";
import Scroll from "./functions/Scroll";
import ScrollToTop from "./functions/ScrollToTop";

function App() {

  const landing = useRef(null);

  return (
    <>
      <header ref={landing}><Landing /></header>
      <main>
        <span onClick={() => Scroll(landing)}><ScrollToTop /></span>
      <About />
      </main>
    </>
  )
}

export default App;