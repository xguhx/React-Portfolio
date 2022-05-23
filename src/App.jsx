import { Topbar } from "./components/topbar/Topbar";
import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfiolio/Portfolio";
import { Works } from "./components/works/Works";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Contact } from "./components/contact/Contact";
import { Menu } from "./components/menu/Menu";
import { useState } from "react";

import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Works />
        <Portfolio />
        <AboutMe />
        <Contact />
      </div>
    </div>
  );
}

export default App;
