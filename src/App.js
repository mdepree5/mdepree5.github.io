import { useState } from 'react';
import { Route, Routes, Link, Navigate } from "react-router-dom";

import Navigation from './components/1_Navigation'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [mode, switchMode] = useState('dark')

  return (
    <div className={`${mode} App`}>

      <Navigation mode={mode} switchMode={switchMode} />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Mitch DePree</h2>

        <ExternalLink link='https://github.com/mdepree5' image='https://capstone-slack-clone.s3.amazonaws.com/github.png' />
        <ExternalLink link='https://www.linkedin.com/in/mitch-depree-4a5686155/' image='https://capstone-slack-clone.s3.amazonaws.com/linkedin.png' />

      </header>


      <div style={{border:'0.5em solid red', height:'5em'}}>
        <Link to="/" >HOME</Link>
        <Link to="/resume" >RESUME</Link>
      </div>

      <div style={{border:'0.5em solid blue', height:'5em'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </div>

    </div>
  );
}

const ExternalLink = ({link, image}) => <img style={{cursor:'pointer', height:'2em', width:'2em'}} onClick={()=>window.open(link)} src={image} alt='about-link' />


const Home = () => {
  return (
    <div>HOME</div>
  )
}

const Resume = () => {
  return (
    <div>RESUME</div>
  )
}


export default App;
