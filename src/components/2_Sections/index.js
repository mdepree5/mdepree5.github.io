import { Route, Routes, NavLink, Navigate } from "react-router-dom";
// ???? ——————————————————————————————————————————————————————————————————————————————————
import Home from './home'
import About from './about'
import Resume from './resume'
import Projects from './projects'
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Sections = () => {

  return (
    <div className='sections'>
      <div className='site-page'>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </div>
    </div>


  )
}

export default Sections;