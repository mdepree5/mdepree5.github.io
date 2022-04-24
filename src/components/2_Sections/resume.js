import {skills, experiences, education} from '../../data/projects' 
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Resume = () => {
  
  return (<>
    <h1>Resume</h1>
    
    <div className='col-list'>
      <div>Skills</div>
      <div>Experiences</div>
      <div>Education</div>
    </div>
  </>)
}


const EducationCard = () => {
  
  return (
    <div>
      Education
    </div>
  )
}


export default Resume;