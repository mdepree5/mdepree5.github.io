import {projects} from '../../data/projects'
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Projects = () => {
  
  return (<>
    <h1>Projects</h1>
    
    <div className='col-list'>
      {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
    </div>
  </>)
}


const ProjectCard = ({project}) => {
  return (
    <div className='project-card row-list'>
      <img className='project-image' src={project.image} alt="project" />

      <div className='col-list'>
        <div className='project-links'>
          <h2>{project.name}</h2>
          <ExternalLink link={project.live} text='See Live'/>
          <ExternalLink link={project.repo} text='See Github'/>
        </div>

        <div className='project-description'>{project.description}</div>
      </div>

    </div>
  )
}


const ExternalLink = ({link, text}) => <strong className='external-link' onClick={()=>window.open(link)}>{text}</strong>

export default Projects;