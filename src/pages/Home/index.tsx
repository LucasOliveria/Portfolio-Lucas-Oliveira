import useStatesContext from '../../hooks/useStatesContext'
import './style.css'

function Home() {
  const value = useStatesContext()
  return (
    <div className="container-home">
      <main>
        <h1 style={{ color: "white" }}>hello</h1>
      </main>
      <div className="container-gif"></div>
    </div>
  )
}

export default Home
