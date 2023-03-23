import { useNavigate } from 'react-router-dom'
import Clock from './components/Clock'
import './styles/AccueilStyle.css'

function App () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/restaurants')
  }

  return (
    <>
      <h2>BIENVENUE</h2>
      <h3>Il est actuellement : </h3>
      <Clock />
      <div className='bouton-accueil'>
        <button onClick={handleClick}>Découvrir les restaurants</button>
      </div>
      <div className='accueil-img'>
        <img src='./accueil.png' />
      </div>
    </>
  )
}

export default App
