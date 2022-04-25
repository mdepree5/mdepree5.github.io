import './Footer.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Footer = ({mode}) => {
  return (
    <footer className={`${mode}-footer footer`}>
      <h2>Contact</h2>
      <ExternalLink link='https://github.com/mdepree5' image='https://capstone-slack-clone.s3.amazonaws.com/github.png' />
      <ExternalLink link='https://www.linkedin.com/in/mitch-depree-4a5686155/' image='https://capstone-slack-clone.s3.amazonaws.com/linkedin.png' />
      <a href="mailto:mdepree315@gmail.com" >Email Mitch</a>

    </footer>
  )
}

const ExternalLink = ({link, image}) => <img style={{cursor:'pointer', height:'2em', width:'2em'}} onClick={()=>window.open(link)} src={image} alt='about-link' />

export default Footer;
