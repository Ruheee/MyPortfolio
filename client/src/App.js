import { useEffect, useRef, useState } from "react";
import "./style/App.scss";
import Contact from "./components/contact";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import Info from "./components/info";

function App() {
  const [home, setIsHome] = useState(false);
  const [projects, setIsProjects] = useState(false);
  const [contact, setIsContact] = useState(false);
  const [info, setIsInfo] = useState(false);

  

  useEffect(() => {
    setIsHome(true)
  }, [])

  const setInfoTrue = () => {
    if (!info) {
      setIsContact(false);
      setIsProjects(false);
      setIsHome(false);
      setIsInfo(true);
    }
  };


  const setHomeTrue = () => {
    if (!home) {
      setIsContact(false);
      setIsProjects(false);
      setIsInfo(false);
      setIsHome(true);
      
    }
  };
  const setProjects = () => {
    if (!projects) {
      setIsContact(false);
      setIsHome(false);
      setIsInfo(false);
      setIsProjects(true);
    }
  };
  const setContact = () => {
    if (!contact) {
      setIsHome(false);
      setIsProjects(false);
      setIsInfo(false);
      setIsContact(true);
    }
  };

  return (
    <div className="conatiner">
      <div className="background"></div>
      <NavBar
        setHomeTrue={setHomeTrue}
        setProjects={setProjects}
        setContact={setContact}
        setInfo={setInfoTrue}
      />
      {home && <Home />}
      {projects && <Projects />}
      {info && <Info />}
      {contact && <Contact />}
    </div>
  );
}

export default App;
