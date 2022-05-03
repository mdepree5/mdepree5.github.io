import {projects} from '../../data/projects'
import './Sections.css'
import './projects.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Projects = ({mode}) => {
  
  return (
    <div id='projects'>
      <h1>Projects</h1>
      <div className='col-list'>
        {projects.map(project => <ProjectCard key={project.name} mode={mode} project={project}/>)}
      </div>
    </div>
  )
}


const ProjectCard = ({mode, project}) => {
  return (
    <div className={`${mode}-project-card project-card`}>
      <img style={{cursor:'pointer'}} onClick={()=>window.open(project.live)} className='project-image' src={project.image} alt="project" />

      <div className='col-list'>
        <div className='project-links'>
          <h2 style={{cursor:'pointer'}} onClick={()=>window.open(project.live)} >{project.name}</h2>
          <ExternalLink link={project.live} text='Live'/>
          <ExternalLink link={project.repo} text='Github'/>
        </div>

        <div className='project-description'>{project.description}</div>
      </div>

    </div>
  )
}


const ExternalLink = ({link, text}) => <strong className='external-link' onClick={()=>window.open(link)}>{text}</strong>

export default Projects;