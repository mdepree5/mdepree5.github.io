import {skills, experiences, education} from '../../data/resume' 
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Resume = () => {
  
  return (<>
    <h1>Resume</h1>
    
    <div className='col-list'>
      <div>Skills</div>
        {skills.map(skill => <SkillCard skill={skill}/>)}

      <div>Experiences</div>

      <div>Education</div>

    </div>
  </>)
}



const SkillCard = () => {
  
  return (
    <div className='skill-card'>
      Skill
    </div>
  )
}

const ExperienceCard = () => {
  
  return (
    <div className='experience-card'>
      Experience
    </div>
  )
}

const EducationCard = () => {
  
  return (
    <div className='education-card'>
      Education
    </div>
  )
}


export default Resume;