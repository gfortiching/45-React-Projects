import  React, { useRef, useState } from "react";
import Landing from "./components/Landing-Page";
import About from "./components/About";
import Projects from "./components/Projects";
import "./components/css/App.css";
import "./components/css/Navigation.css"
import Scroll from "./functions/Scroll";
import ScrollToTop from "./functions/ScrollToTop";

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import DashboardIcon from '@mui/icons-material/Dashboard';


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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const ToggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
  }
  
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 }}
      role="presentation"
      onClick={ToggleDrawer(anchor, false)}
      onKeyDown={ToggleDrawer(anchor, false)}
      style={{height: "100vh"}}
    >
        <ul className="drawer-ul">
          <li onClick={() => Scroll(landing)}>home</li>
          <li onClick={() => Scroll(about)}>about</li>
          <li onClick={() => Scroll(projects)}>projects</li>
          <li onClick={() => Scroll(contact)}>contact</li>
        </ul>
    </Box>
  );

  function NavDrawer() {
    return (
      <nav id="navDrawer">
          {['left'].map((anchor) => (
          <React.Fragment key={anchor} >
          <Button onClick={ToggleDrawer(anchor, true)}>
              <span className="hideAnchor">{anchor}</span>
              <span className="dashboardIcon"><DashboardIcon /></span>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={ToggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
          ))}
      </nav>
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
      <NavDrawer />
        <span onClick={() => Scroll(landing)}><ScrollToTop /></span>
        <div ref={about}><About /></div>
        <div ref={projects}><Projects /></div>
      </main>
    </>
  )
}

export default App;