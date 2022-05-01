import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Home = () => {
  return (<>
    <h1>Engineer, Developer</h1>
    <div className='info-page'>
      <HomeText/>
      <img className='info-image' src='https://md5-self.s3.amazonaws.com/self/header.jpeg' alt='' />
    </div>
    <h2>Writing better code to build a brighter world</h2>
  </>)
}


const HomeText = () => {
  return (
    <div className='info-text'>
      <div>
        Mitch deletes as much code as he writes,
        trades indecisiveness for automation, and 
        reads as much documentation as a 12oz medium roast will take him on a Saturday morning.
      </div>
    </div>
  )
}
export default Home;