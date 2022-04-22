import { Route, Routes, Link, Navigate } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

const App = () => {
  
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>PERSONAL</h1>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React... or, don't...
        </a>

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
