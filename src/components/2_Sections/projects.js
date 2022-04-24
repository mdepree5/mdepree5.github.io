import './Sections.css'
// ???? ——————————————————————————————————————————————————————————————————————————————————

const projects = [
  {
    name: 'TVHey',
    contributors: 'Mitch DePree',
    description: 'Here at TVHey, we believe in the power of communication, and we believe in giving you the tools to communicate. Check out our latest product, a beautifully designed, lightning-fast messaging app (inspired by Slack). We think you\'ll love it.',
    live: 'https://tvhey.herokuapp.com/',
    repo: 'https://github.com/mdepree5/TVHey',
    image: '',
  },
  {
    name: 'Cheatsheets',
    contributors: 'Mitch DePree, Karl Felter, Daniel Thai, James Tuttle',
    description: 'Building something new? Instructables will show you how. Want to master the tech world? Come check out Cheatsheets.',
    live: 'https://cheatsheets-group-project.herokuapp.com/',
    repo: 'https://github.com/mdepree5/cheatsheets',
    image: '',
  },
  {
    name: 'Monopolynb',
    contributors: 'Mitch DePree',
    description: 'Monopolynb is what the world would have if the Parker Brothers hired software engineers. Where are you going next? We\'ve got you covered.',
    live: 'https://monopolynb.herokuapp.com/',
    repo: 'https://github.com/mdepree5/monopolynb',
    image: '',
  },
  {
    name: 'Rabbit Hole',
    contributors: 'Mitch DePree, Skye Brown, Wan-Yi Lee, Hamlet Villa',
    description: 'Every developer has ventured down a "rabbit hole" at some point in their career. Rabbit Hole is here to help you out.',
    live: 'https://rabbit-hole-cl.herokuapp.com/',
    repo: 'https://github.com/mdepree5/express-project',
    image: '',
  },
]


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