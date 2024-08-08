import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
          {PROJECTS.map((project, index) => {
            return (
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} 
                    className='mb-6 rounded object-cover'/>
                  </a>
                </div>
                <div className='w-full max-w-xl lg:w-2/3 lg:pl-8'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h6 className='mb-2 font-semibold hover:underline'>{project.title}</h6>
                  </a>
                  <p className='mb-4 text-neutral-400'>{project.description}</p>
                  {project.technologies.map((tech, index) => {
                    return (
                      <span key={index} className='mr-2 bg-neutral-900 text-neutral-400 px-2 py-1 rounded font-medium'>{tech}</span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Projects