import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { WiSolarEclipse } from "react-icons/wi";
// ???? ——————————————————————————————————————————————————————————————————————————————————
import './Navigation.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Navigation = ({mode, switchMode, setSite}) => {

  const [dropdown, toggleDropdown] = useState(false)

  const NavLink = ({type, section, scroll}) => {
    return (
      <div style={{cursor:'pointer'}} className={`${mode}-${type}`} onClick={() => {
        scroll()
        toggleDropdown(false)
      }}> {section} </div>
    )
  }

  const scrollToHome = () => {
    const element = document.getElementById('home');
    element.scrollIntoView({behavior: "smooth", block:'start'});
  }
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element.scrollIntoView({behavior: "smooth", block:'start'});
  }
  const scrollToResume = () => {
    const element = document.getElementById('resume');
    element.scrollIntoView({behavior: "smooth", block:'start'});
  }
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element.scrollIntoView({behavior: "smooth", block:'start'});
  }

  return (
    <nav className={`${mode}-nav nav-bar`}>
      <div id='left-nav'>
        {/* <h2 style={{cursor:'pointer'}} onClick={() => setSite('')} >Mitch DePree</h2> */}
        <h2 style={{cursor:'pointer'}} onClick={scrollToHome} >Mitch DePree</h2>
      </div>
    
      <div id='mid-nav'>
        <NavLink type='navlink' section='About' scroll={scrollToAbout} />
        <NavLink type='navlink' section='Projects' scroll={scrollToProjects} />
        <NavLink type='navlink' section='Resume' scroll={scrollToResume} />
      </div>
    
      <div id='right-nav'>
        <WiSolarEclipse style={{height: '2em', width:'2em', cursor: 'pointer'}} onClick={() => switchMode(mode === 'light' ? 'dark' : 'light')}/>
        <Hamburger toggled={dropdown} toggle={toggleDropdown} />

        {dropdown && <div className='dropdown-background' onClick={()=> toggleDropdown(false)}>
          <div className='dropdown-content'>
            <NavLink type='dropdownlink' section='About' scroll={scrollToAbout} />
            <NavLink type='dropdownlink' section='Projects' scroll={scrollToProjects} />
            <NavLink type='dropdownlink' section='Resume' scroll={scrollToResume} />
          </div>
        </div>}
      </div>
    </nav>
  )
}






export default Navigation;
