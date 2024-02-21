import useStatesContext from '../../hooks/useStatesContext'
import './style.css'

function Home() {
  const value = useStatesContext()
  return (
    <>
      {value.test}
    </>
  )
}

export default Home
