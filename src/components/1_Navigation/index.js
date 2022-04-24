import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Divide as Hamburger } from 'hamburger-react'
// ???? ——————————————————————————————————————————————————————————————————————————————————
import './Navigation.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Navigation = ({mode, switchMode}) => {
  const navigate = useNavigate();

  const [dropdown, toggleDropdown] = useState(false)


  return (
    <nav className={`${mode}-nav nav-bar`}>
      <div id='left-nav'>
    {/* <img className='navicon' onClick={() => history.push('/')}
      src='https://capstone-slack-clone.s3.amazonaws.com/favicon.ico' alt='custom'
    /> */}
        <h2 style={{cursor:'pointer'}} onClick={() => navigate('/')} >Mitch DePree</h2>
      </div>
    
      <div id='mid-nav'>
        <button onClick={() => switchMode(mode === 'light' ? 'dark' : 'light')}>
          Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    
      <div id='right-nav'>
        {dropdown && <div>
          show dropdown
        </div>}
        <Hamburger toggled={dropdown} toggle={toggleDropdown} />
      </div>
    </nav>
  )
}

export default Navigation;
