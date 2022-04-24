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

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <div className='row-list'>
        <h2>Mitch DePree</h2>
        <ExternalLink link='https://github.com/mdepree5' image='https://capstone-slack-clone.s3.amazonaws.com/github.png' />
        <ExternalLink link='https://www.linkedin.com/in/mitch-depree-4a5686155/' image='https://capstone-slack-clone.s3.amazonaws.com/linkedin.png' />

      </div>

      <div className='row-list site-nav' >
        <Link to="/" >Home</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/about" >About</Link>
      </div>

      <div style={{border:'0.2em solid blue', minHeight:'5em'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>

    </div>
  );
}

const ExternalLink = ({link, image}) => <img style={{cursor:'pointer', height:'2em', width:'2em'}} onClick={()=>window.open(link)} src={image} alt='about-link' />


const Home = () => {
  return (<>
    <h2>Home</h2>
    <p>
      hello lorem ipsum
    </p>
  </>)
}

const About = () => {
  return (<>
    <h2>About Mitch</h2>
    <p>
      hello lorem ipsum
    </p>
  </>)
}
const Resume = () => {
  return (<>
    <h2>Resume</h2>
    <p>
      hello lorem ipsum
    </p>
  </>)
}


export default App;
