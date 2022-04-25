import { MdOutgoingMail } from "react-icons/md";
import './Footer.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Footer = ({mode}) => {
  return (
    <footer className={`${mode}-footer footer`}>
      <h2 style={{marginLeft: '1em'}}>Contact</h2>      
      
      <div className='footer-links'>
        <img style={{cursor:'pointer', height:'1.9em', width:'1.9em', backgroundColor:'white', borderRadius:'0.15em' }} onClick={()=>window.open('https://github.com/mdepree5')} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt='about-link' />
        <img style={{cursor:'pointer', height:'2em', width:'2em'}} onClick={()=>window.open('https://www.linkedin.com/in/mitch-depree-4a5686155/')} src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'} alt='about-link' />
        <a href="mailto:mdepree315@gmail.com" ><MdOutgoingMail style={{height: '2.6em', width:'2.6em', cursor: 'pointer'}}/></a>
      </div>

    </footer>
  )
}


export default Footer;
