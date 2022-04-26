import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Home = () => {
  return (<>
    <h1>Writing better code to build a brighter world</h1>
    
    <div className='home-page'>
      <div className='manifesto'>
        Mitch deletes as much code as he writes,
        trades indecisiveness for automation, and 
        reads as much documentation as a 12oz medium roast will take him on a Saturday morning.
      </div>
      <img className='home-image' src='https://md5-self.s3.amazonaws.com/self/header.jpeg' alt='' />

      {/* <img style={{height:'10em', width:'9em', borderRadius:'0.5em'}} src='https://md5-self.s3.amazonaws.com/self/headshot.jpg' alt='' /> */}
    </div>
  </>)
}

export default Home;