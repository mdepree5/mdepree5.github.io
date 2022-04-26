import {skills, experiences, educations} from '../../data/resume' 
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————


const Resume = ({mode}) => {
  
  return (<>
    <h1>Resume</h1>

    <div className='col-list'>
      <h2>Experiences</h2>
      <div className='col-list'>
        {experiences.map(experience => <ExperienceCard key={experience.name} experience={experience}/>)}
      </div>

      <h2>Education</h2>
      <div className='col-list'>
        {educations.map(education => <EducationCard key={education.name} education={education}/>)}
      </div>

      <h2>Skills</h2>
      <div className={`${mode}-skill-container skill-container`}>
        {skills.map(skill => <SkillCard key={skill.image} mode={mode} skill={skill}/>)}
      </div>
    </div>
  </>)
}


const ExperienceCard = ({experience}) => {
  
  return (
    <div className='experience-card'>
      {/* <img className='experience-image' src={experience.image} alt="experience" /> */}
      
      <div className='col-list'>
        <div className='experience-header' >
          <h3 >{experience.role}</h3>
          <div style={{fontStyle: 'italic'}} >{experience.name}</div>
          <div>{experience.timeframe}</div>
        </div>

        <ul>{experience.bullets.map(bullet => (
          <li key={bullet}>{bullet}</li>
        ))}</ul>
      </div>
    </div>

  )
}

const EducationCard = ({education}) => {
  
  return (
    <div className='education-card'>
      {/* <img style={{cursor:'pointer'}} onClick={()=>window.open(education.link)} className='education-image' src={education.image} alt="education" /> */}

      <div className='col-list'>
        <div className='education-header'>
          <h3>{education.yield}</h3>
          <div style={{fontStyle: 'italic'}} >{education.name}</div>
          <div>{education.timeframe}</div>
        </div>

        <div className='education-description' >{education.description}</div>
      </div>
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