import { createContext, useContext } from 'react'

const ProjectContext = createContext(null)

/**
 * This should just display everything
 */
function Projects(props) {
  const {list} = props

  return (
    <ProjectContext.Provider value={list}>
      <div>
        <h2>Projects</h2>
        <ProjectNavigaion />
        <ProjectList />
      </div>
    </ProjectContext.Provider>
  )
}

function ProjectNavigaion(props) {
  const projects = useContext(ProjectContext)
  return <h3>Navigation</h3>
}

function ProjectList() {
  const projects = useContext(ProjectContext)
  return (
    projects.map(
      (project) => {
        return (
          <div key={project.id}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
          </div>
        )
      }
    )
  )
}

export default Projects