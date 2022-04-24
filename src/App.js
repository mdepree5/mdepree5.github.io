import { useState } from 'react';
import { Route, Routes, Link, Navigate } from "react-router-dom";
// ???? ——————————————————————————————————————————————————————————————————————————————————
import Navigation from './components/1_Navigation'
import About from './components/2_Sections/about'
import Home from './components/2_Sections/home'
import Resume from './components/2_Sections/resume'
import Projects from './components/2_Sections/projects'

import './App.css';
// ???? ——————————————————————————————————————————————————————————————————————————————————

const App = () => {
  const [mode, switchMode] = useState('dark')

  return (
    <div className={`${mode} App`}>
      <Navigation mode={mode} switchMode={switchMode} />

      <div className='row-list site-nav' >
        <Link to="/" >Home</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/about" >About</Link>
        <Link to="/projects" >Projects</Link>
      </div>

      <div style={{border:'0.2em solid blue', minHeight:'5em'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>

      <Footer mode={mode}/>

    </div>
  );
}

const ExternalLink = ({link, image}) => <img style={{cursor:'pointer', height:'2em', width:'2em'}} onClick={()=>window.open(link)} src={image} alt='about-link' />

const Footer = ({mode}) => {
  return (
    <div className={`${mode}-footer`}>

      <h2>Mitch DePree</h2>

      <h2>Contact</h2>
      <div className='row-list'>
        <ExternalLink link='https://github.com/mdepree5' image='https://capstone-slack-clone.s3.amazonaws.com/github.png' />
        <ExternalLink link='https://www.linkedin.com/in/mitch-depree-4a5686155/' image='https://capstone-slack-clone.s3.amazonaws.com/linkedin.png' />
        <a href="mailto:mdepree315@gmail.com" class="icon style2 fa-envelope"><span class="label">Email Mitch</span></a>
      </div>

    </div>
  )
}

export default App;
