import { useNavigate } from 'react-router-dom';
// ???? ——————————————————————————————————————————————————————————————————————————————————
import './Navigation.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Navigation = ({mode, switchMode}) => {
  const history = useNavigate();

  return (
    <div className='nav-bar'>
      <div id='left-nav'>
    {/* <img className='navicon' onClick={() => history.push('/')}
      src='https://capstone-slack-clone.s3.amazonaws.com/favicon.ico' alt='custom'
    /> */}
        <h2 style={{cursor:'pointer'}} onClick={() => history.push('/')} >Mitch DePree</h2>
      </div>
    
      <div id='mid-nav'>
        <button onClick={() => switchMode(mode === 'light' ? 'dark' : 'light')}>
          Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    
      <div id='right-nav'>
        Right
      </div>
    </div>
  )
}

export default Navigation;
