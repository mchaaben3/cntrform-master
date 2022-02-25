import './App.css';
import React from "react"
import About from './Components/About';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Formations from './Components/Formations/Formations';
import Nav from "./Components/Nav";
import Register from './Components/user/Register';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
       <Nav modalShow={modalShow} setModalShow={setModalShow} />
     <Banner />
     <About />
     <Formations />
     <Contact />

    </div>
  );
}

export default App;
