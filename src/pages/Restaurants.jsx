import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

function Restaurants () {
  // on déclare une varibale (restaurant) qui contient nos restaurants
  // On obtient une méthode (setRestaurants) permettant de mettre à jour les restaurants et de rafraichir l'affichage
  const [restaurants, setRestaurants] = useState()

  // Méthode du cycle de vie d'un composant react permettant d'effectuer une action au montage du composant
  // Le montage c'est l'apparition du composant à l'écran
  useEffect(() => {
    // On crée une méthode pour récuperer les données provenant du backend (strapi)
    const loadData = async () => {
      // On récupère les données du backend avec la librairie axios (c'est un appel HTTP)
      const response = await axios.get('http://localhost:1337/api/restaurants?populate=*') // ?populates=* => est un paramètre permettant de récupéré TOUTES les données (après modif)
      // triple égal, on vérifie l'égalité stricte
      // On vérifie que l'appel de l'api s'est bien passé (status = 200 = OK )
      if (response.status === 200) {
        // si l'appel d'API est OK, on enregistre les restaurants dans la variable restaurant
        const data = response.data.data
        setRestaurants(data)
      }
    }
    // On appelle la méthode créé-e précédemment
    loadData()
  }, [])
  return (
    <>
      <h2>LISTE DES RESTAURANTS</h2>
      <div className='list'>{
      // on vérifie que l'on a bien récupéré les restaurants
      // on créer une boucle sur le tableau restaurant grâce à la fonction "map()"
      // On retourne pour chaque restaurant, une card pour afficher son contenu
      restaurants && restaurants.map(restaurant => {
        return (
          <Card key={restaurant.id} restaurant={restaurant} />
        )
      })
    }
      </div>
    </>
  )
}

export default Restaurants
