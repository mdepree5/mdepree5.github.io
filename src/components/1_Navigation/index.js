import { useState } from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'
import { WiSolarEclipse } from "react-icons/wi";
// ???? ——————————————————————————————————————————————————————————————————————————————————
import './Navigation.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Navigation = ({mode, switchMode}) => {
  const navigate = useNavigate();

  const [dropdown, toggleDropdown] = useState(false)


  return (
    <nav className={`${mode}-nav nav-bar`}>
      <div id='left-nav'>
        <h2 style={{cursor:'pointer'}} onClick={() => navigate('/')} >Mitch DePree</h2>
      </div>
    
      <div id='mid-nav'>
        <NavLink className={({isActive}) => isActive ? `${mode}-selected-site` : ''} id={`${mode}-navlink`} to="/projects" >Projects</NavLink>
        <NavLink className={({isActive}) => isActive ? `${mode}-selected-site` : ''} id={`${mode}-navlink`} to="/resume" >Resume</NavLink>
        <NavLink className={({isActive}) => isActive ? `${mode}-selected-site` : ''} id={`${mode}-navlink`} to="/about" >About</NavLink>
      </div>
    
      <div id='right-nav'>
        <WiSolarEclipse style={{height: '2em', width:'2em', cursor: 'pointer'}} onClick={() => switchMode(mode === 'light' ? 'dark' : 'light')}/>
        <Hamburger toggled={dropdown} toggle={toggleDropdown} />

        {dropdown && <div className='dropdown-background' onClick={()=> toggleDropdown(false)}>
          <div className='dropdown-content'>
            <NavLink className={`${mode}-dropdownlink`} onClick={()=> toggleDropdown(false)} to="/projects" >Projects</NavLink>
            <NavLink className={`${mode}-dropdownlink`} onClick={()=> toggleDropdown(false)} to="/resume" >Resume</NavLink>
            <NavLink className={`${mode}-dropdownlink`} onClick={()=> toggleDropdown(false)} to="/about" >About</NavLink>
          </div>
        </div>}
      </div>
    </nav>
  )
}

export default Navigation;
