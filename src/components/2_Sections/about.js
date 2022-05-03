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
      {/* <h2>Writing better code to build a brighter world</h2> */}
      <h1>Call me Mitch. </h1>
      <div style={{fontSize:'1.5em'}} >
        I earned dual Bachelor degrees in Classical Studies and Religion from Hope College before 
        pursuing software development with App Academy.
      </div>

      <div style={{fontSize:'1.5em'}} >
        I am always learning, tinkering, and improving.
      </div>

      <div style={{fontSize:'1.5em'}} >
        When it isn't data structures and algorithms, it's Boolean algebra and/or logic. 
        <br />
        When it's learning how the brain works, 
        How to get further with less,
        How to speak less.
      </div>
    </div>
  )
}

export default About;