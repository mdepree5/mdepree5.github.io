import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————



const About = () => {
  return (<>
    <h1>Mitch DePree is a software developer and lifelong learner
      who needs to write more about his about
      {/* who does x in order for y to happen */}
    </h1>
    <div>
      {/*     
        <h2>Software Developer</h2>
        <h2>Lifelong Learner</h2>
        <h2>Stories</h2>

        <h2>Things Mitch is currently working on:</h2>
        <div>Trying to learn recursion.</div>
        <div>Trying to learn recursion.</div> 
      */}

      <img className='home-image' src="https://static.seekingalpha.com/uploads/2013/3/21/7360901-13638972437431467-Robert-Wagner.jpg" alt="" />
    </div>
  </>)
}

export default About;