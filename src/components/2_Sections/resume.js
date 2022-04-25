import {skills, experiences, educations} from '../../data/resume' 
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Resume = () => {
  
  return (<>
    <h1>Resume</h1>

    <div className='col-list'>

      <strong>Experiences</strong>
      <div className='resume-container'>
        {experiences.map(experience => <ExperienceCard key={experience.name} experience={experience}/>)}
      </div>

      <strong>Education</strong>
      <div className='resume-container'>
        {educations.map(education => <EducationCard key={education.name} education={education}/>)}
      </div>

      <strong>Skills</strong>
      <div className='resume-container'>
        {skills.map(skill => <SkillCard key={skill.image} skill={skill}/>)}
      </div>

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
    <div className='experience-card row-list'>
      <div className='col-list'>
        <img className='experience-image' src={experience.image} alt="experience" />
      
        <h3 >{experience.role}</h3>
        <div style={{fontStyle: 'italic'}} >{experience.name}</div><div>{experience.timeframe}</div>
      </div>

      <ul>{experience.bullets.map(bullet => (
        <li key={bullet}>{bullet}</li>
      ))}</ul>
    </div>
  )
}

const EducationCard = ({education}) => {
  
  return (
    <div className='education-card'>
      <div style={{fontWeight: 'bold'}} >{education.description}</div>
      <div style={{fontStyle: 'italic'}} >{education.name}</div>
      <div>{education.timeframe}</div>
      <ExternalLink link={education.link} text={education.name}/>
      <img src={education.image} alt="education" />
    </div>
  )
}

const ExternalLink = ({link, text}) => <strong className='external-link' onClick={()=>window.open(link)}>{text}</strong>

export default Resume;