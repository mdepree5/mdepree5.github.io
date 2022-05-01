import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const About = () => {
  return (<>
    <h1>Mitch DePree is a software developer and lifelong learner
      who is committed to building a better world
    </h1>
    
    <div className='about-page'>
      <AboutText />
      <img className='home-image' src="https://static.seekingalpha.com/uploads/2013/3/21/7360901-13638972437431467-Robert-Wagner.jpg" alt="" />
      
      <img style={{height:'10em', width:'9em', borderRadius:'0.5em'}} src='https://md5-self.s3.amazonaws.com/self/headshot.jpg' alt='' />
    </div>
  </>)
}


const AboutText = () => {
  return (
    <div className='about-text'>
      <div>
        Growing up,
        Mitch did x, y, z
        Mitch found 1, 2, 3 interesting

      </div>

      <div>
        Mitch earned Bachelor of Arts degrees in Classical Studies and Religion from Hope College.
        
        After studying at Hope College
      </div>

      <div>
        In 2021 September, 
        Mitch chose to pursue software development
      </div>
    </div>
  )
}

export default About;