import { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { WiSolarEclipse } from "react-icons/wi";
// ???? ——————————————————————————————————————————————————————————————————————————————————
import './Navigation.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Navigation = ({mode, switchMode, setSite}) => {

  const [dropdown, toggleDropdown] = useState(false)

  const NavLink = ({type, section}) => {
    return (
      <div style={{cursor:'pointer'}} className={`${mode}-${type}`} onClick={() => {
        setSite(section.toLowerCase())
        toggleDropdown(false)
      }}> {section} </div>
    )
  }

  return (
    <nav className={`${mode}-nav nav-bar`}>
      <div id='left-nav'>
        <h2 style={{cursor:'pointer'}} onClick={() => setSite('')} >Mitch DePree</h2>
      </div>
    
      <div id='mid-nav'>
        <NavLink type='navlink' section='Projects'/>
        <NavLink type='navlink' section='Resume'/>
        <NavLink type='navlink' section='About'/>
      </div>
    
      <div id='right-nav'>
        <WiSolarEclipse style={{height: '2em', width:'2em', cursor: 'pointer'}} onClick={() => switchMode(mode === 'light' ? 'dark' : 'light')}/>
        <Hamburger toggled={dropdown} toggle={toggleDropdown} />

        {dropdown && <div className='dropdown-background' onClick={()=> toggleDropdown(false)}>
          <div className='dropdown-content'>
            <NavLink type='dropdownlink' section='Projects'/>
            <NavLink type='dropdownlink' section='Resume'/>
            <NavLink type='dropdownlink' section='About'/>
          </div>
        </div>}
      </div>
    </nav>
  )
}






export default Navigation;
