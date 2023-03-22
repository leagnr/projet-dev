import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardMap from '../components/CardMap'
import CardResto from '../components/CardResto'
import '../styles/RestoStyle.css'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurant(data)
      }
    }
    loadData()
  }, [])

  return restaurant && (
    <>
      <h1>FICHE DU RESTAURANT</h1>
      <CardResto restaurant={restaurant} />
      <CardMap />
    </>
  )
}

export default Restaurant
