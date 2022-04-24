import {projects} from '../../data/projects'
import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const Projects = () => {
  
  return (<>
    <h1>Projects</h1>
    

    <div className='projects-container'>
      {projects.map(project => (
        <div className='project-card' key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <ExternalLink link={project.live} text='See Live'/>
          <ExternalLink link={project.repo} text='See Github'/>
          <img src={project.image} alt="project" />
        </div>
      ))}
    </div>



  </>)
}

const ExternalLink = ({link, text}) => <strong className='external-link' onClick={()=>window.open(link)}>{text}</strong>

export default Projects;