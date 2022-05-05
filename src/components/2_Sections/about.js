import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const About = () => {
  return (
    <div className='info-page' id='about'>
      <AboutText />
      <img style={{height:'10em', width:'9em', borderRadius:'0.5em'}} src='https://md5-self.s3.amazonaws.com/self/headshot.jpg' alt='' />
    </div>
  )
}

const AboutText = () => {
  return (
    <div className='info-text'>
      <h1>Call me Mitch. </h1>

      <div style={{fontSize:'1.5em'}} >
        Software engineer, Z shell enthusiast, master translator.
      </div>
      
      <div style={{fontSize:'1.5em'}} >
        Classics-Religion major, downhill skier, careful listener.
      </div>

      <div style={{fontSize:'1.5em'}} >
        When I'm not in front of screens, you'll find me
        trail running or climbing.
      </div>
    </div>
  )
}

export default About;