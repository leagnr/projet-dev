import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardMap from '../components/CardMap'
import CardResto from '../components/CardResto'
import DishesList from '../components/DishesList'
import '../styles/RestoStyle.css'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate[image][populate]=*&populate[dishes][populate]=*&populate[adresse][populate]=*`)
      if (response.status === 200) {
        const data = response.data.data
        console.log(data)
        setRestaurant(data)
      }
    }
    loadData()
  }, [])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/restaurants')
  }
  return restaurant && (
    <>
      <div className='bouton-retour'>
        <button onClick={handleClick}>Retour</button>
      </div>
      <h2>FICHE DU RESTAURANT</h2>
      <CardResto restaurant={restaurant} />
      <CardMap adresse={restaurant.attributes.adresse} />
      <DishesList dishes={restaurant.attributes.dishes} />
      {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}

    </>
  )
}

export default Restaurant
