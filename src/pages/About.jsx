import { useNavigate } from 'react-router-dom'

function About () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <div className='bouton-retour'>
        <button onClick={handleClick}>Retour</button>
      </div>
      <h2>À PROPOS</h2>
    </>
  )
}

export default About
