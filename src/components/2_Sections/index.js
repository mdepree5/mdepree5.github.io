import { Route, Routes, Link, Navigate } from "react-router-dom";
// ???? ——————————————————————————————————————————————————————————————————————————————————
import Home from './home'
import About from './about'
import Resume from './resume'
import Projects from './projects'
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Sections = () => {

  return (
    <>
      <div className='row-list site-nav' >
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/resume" >Resume</Link>
        <Link to="/projects" >Projects</Link>
      </div>

      <div className='site-page'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
    </>


  )
}

export default Sections;