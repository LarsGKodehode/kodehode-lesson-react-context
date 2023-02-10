import projectList from './data/projects'

import Projects from './components/Projects/Projects'

const adhocList = [
  {
    id: 1,
    name: "this is adhoc",
    description: "adhoc"
  }
]

function App() {
  return (
    <div className="App">

      <Projects list={projectList} />
      <Projects list={adhocList} />

    </div>
  )
}

export default App