import { Route, Routes, NavLink, Navigate } from "react-router-dom";
// ???? ——————————————————————————————————————————————————————————————————————————————————
import Home from './home'
import About from './about'
import Resume from './resume'
import Projects from './projects'
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Sections = ({mode, site}) => {

  return (
    <div className={`${mode}-site-page site-page`}>
      {(() => {
        switch (site) {
          case '': return <Home/>
          case 'about': return <About/>
          case 'resume': return <Resume mode={mode}/>
          case 'projects': return <Projects mode={mode}/>
          default: return <Home/>
        }
      })()}
    </div>
  )
}

export default Sections;