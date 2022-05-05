import {skills, experiences, educations} from '../../data/resume' 
import './Sections.css'
import './resume.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Resume = ({mode}) => {
  
  return (
    <div id='resume'>
      <h1>Resume</h1>
      <div className='col-list'>
        <h2>Experiences</h2>
        <div className='col-list'>
          {experiences.map(experience => <ExperienceCard key={experience.name} mode={mode} experience={experience}/>)}
        </div>
    
        <h2>Education</h2>
        <div className='col-list'>
          {educations.map(education => <EducationCard key={education.name} mode={mode} education={education}/>)}
        </div>
    
        <h2>Skills</h2>
        <div className={`${mode}-skill-container skill-container`}>
          {skills.map(skill => <SkillCard key={skill.image} mode={mode} skill={skill}/>)}
        </div>
      </div>
    </div>
  )
}


const ExperienceCard = ({mode, experience}) => {
  
  return (
    <div className={`${mode}-experience-card experience-card`}>
      {/* <img className='experience-image' src={experience.image} alt="experience" /> */}
      
      <div className='experience-header' >
        <h3 >{experience.role}</h3>
        <div style={{fontStyle: 'italic'}} >{experience.name}</div>
        <div>{experience.timeframe}</div>
      </div>

      <ul>{experience.bullets.map(bullet => (
        <li key={bullet}>{bullet}</li>
      ))}</ul>
    </div>
  )
}

const EducationCard = ({mode, education}) => {
  
  return (
    <div className={`${mode}-education-card education-card`}>
      {/* <img style={{cursor:'pointer'}} onClick={()=>window.open(education.link)} className='education-image' src={education.image} alt="education" /> */}

      <div className='education-header'>
        <h3>{education.yield}</h3>
        <div style={{fontStyle: 'italic'}} >{education.name}</div>
        <div>{education.timeframe}</div>
      </div>

      {/* <div className='education-description' >{education.description}</div> */}
      <ul>{education.bullets.map(bullet => (
        <li key={bullet}>{bullet}</li>
      ))}</ul>
    </div>
  )
}

const SkillCard = ({mode, skill}) => {

  return (
    <div className={`${mode}-skill-card skill-card`}>
      <img src={skill.image} alt="icon" />
    </div>
  )
}




export default Resume;