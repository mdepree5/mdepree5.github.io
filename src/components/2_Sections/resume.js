import {skills, experiences, educations} from '../../data/resume' 
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Resume = () => {
  
  return (<>
    <h1>Resume</h1>

    <div className='col-list'>
      <strong>Skills</strong>
      <div className='skills-container'>
        {skills.map(skill => <SkillCard key={skill.image} skill={skill}/>)}
      </div>

      <strong>Experiences</strong>
        {experiences.map(experience => <ExperienceCard key={experience.name} experience={experience}/>)}

      <strong>Education</strong>
        {educations.map(education => <EducationCard key={education.name} education={education}/>)}

    </div>
  </>)
}


const SkillCard = ({skill}) => {
  
  return (
    <div className='skill-card'>
      <img src={skill.image} alt="icon" />
    </div>
  )
}

const ExperienceCard = ({experience}) => {
  
  return (
    <div className='experience-card'>
      <div style={{fontWeight: 'bold'}} >{experience.role}</div>
      <div style={{fontStyle: 'italic'}} >{experience.name}</div>
      <div>{experience.timeframe}</div>
      <ul>{experience.bullets.map(bullet => (
        <li key={bullet}>{bullet}</li>
      ))}</ul>
      <div>{experience.image}</div>

    </div>
  )
}

const EducationCard = ({education}) => {
  
  return (
    <div className='education-card'>
      Education
    </div>
  )
}


export default Resume;