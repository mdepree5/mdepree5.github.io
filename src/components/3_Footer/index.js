import './Footer.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Footer = ({mode}) => {
  return (
    <div className={`${mode}-footer footer`}>
      <h1>Footer</h1>

      <h2>Mitch DePree</h2>

      <h2>Contact</h2>
      <div className='row-list'>
        <ExternalLink link='https://github.com/mdepree5' image='https://capstone-slack-clone.s3.amazonaws.com/github.png' />
        <ExternalLink link='https://www.linkedin.com/in/mitch-depree-4a5686155/' image='https://capstone-slack-clone.s3.amazonaws.com/linkedin.png' />
        <a href="mailto:mdepree315@gmail.com" class="icon style2 fa-envelope"><span class="label">Email Mitch</span></a>
      </div>

    </div>
  )
}

const ExternalLink = ({link, image}) => <img style={{cursor:'pointer', height:'2em', width:'2em'}} onClick={()=>window.open(link)} src={image} alt='about-link' />

export default Footer;
