import  { useRef, useState } from "react";
import Landing from "./components/Landing-Page";
import About from "./components/About";
import Projects from "./components/Projects";
import "./components/css/App.css";
import "./components/css/Navigation.css"
import Scroll from "./functions/Scroll";
import ScrollToTop from "./functions/ScrollToTop";


function App() {

  const landing = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  
  function GetToKnow() {
  
    const [headText, setHeadText] = useState("Get to know me!");
  
    return (
        <button 
          className="cta" 
          onClick={() => Scroll(about)} 
          onMouseOver={() => setHeadText("Click to scroll down")} 
          onMouseLeave={() => setHeadText("Get to know me!")}>
          {headText}
        </button>
    )
  }

  function Navigation() {
    return (
        <>
        <nav className="navigation">
            <ul>
                <li onClick={() => Scroll(landing)}>home</li>
                <li onClick={() => Scroll(about)}>about</li>
                <li onClick={() => Scroll(projects)}>projects</li>
                <li onClick={() => Scroll(contact)}>contact</li>
            </ul>
        </nav>
        </>
    )
  }

  return (
    <>
      <header className="landing" ref={landing}> 
        <Landing />
        <GetToKnow />
      </header>
      <main className="app">
      <Navigation />
        <span onClick={() => Scroll(landing)}><ScrollToTop /></span>
        <div ref={about}><About /></div>
        <div ref={projects}><Projects /></div>
      </main>
    </>
  )
}

export default App;