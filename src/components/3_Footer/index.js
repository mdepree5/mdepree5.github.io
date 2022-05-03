import { MdOutgoingMail } from "react-icons/md";
import './Footer.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Footer = ({mode}) => {
  return (
    <footer className={`${mode}-footer footer`}>
      <h2 style={{margin: '1em', marginRight:'0.5em'}}>Connect</h2>
      
      <div className='footer-links'>
        <img style={{cursor:'pointer', height:'1.9em', width:'1.9em', backgroundColor:'white', borderRadius:'0.15em' }} onClick={()=>window.open('https://github.com/mdepree5')} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' alt='about-link' />
        <div>||</div>
        <img style={{cursor:'pointer', height:'2em', width:'2em'}} onClick={()=>window.open('https://www.linkedin.com/in/mitch-depree-4a5686155/')} src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'} alt='about-link' />
        <div>||</div>
        <a style={{display:'flex', alignItems:'center'}} href="mailto:mdepree315@gmail.com" ><strong>Email</strong> <MdOutgoingMail style={{height: '1.6em', width:'1.6em', marginLeft:'0.4em'}}/></a>
      </div>

    </footer>
  )
}


export default Footer;
