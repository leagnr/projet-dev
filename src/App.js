import logo from './logo.svg';
import './styles/Variable.css'
import './App.css';
import Clock from './components/Clock';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  //on déclare une varibale (restaurant) qui contient nos restaurants
  //On obtient une méthode (setRestaurants) permettant de mettre à jour les restaurants et de rafraichir l'affichage 
  const [restaurants, setRestaurants] = useState()

  //Méthode du cycle de vie d'un composant react permettant d'effectuer une action au montage du composant
  //Le montage c'est l'apparition du composant à l'écran
  useEffect (() => {
    //On crée une méthode pour récuperer les données provenant du backend (strapi) 
    const loadData = async () => {
      //On récupère les données du backend avec la librairie axios (c'est un appel HTTP)
      const response = await axios.get('http://localhost:1337/api/restaurants?populate=*') //?populates=* => est un paramètre permettant de récupéré TOUTES les données (après modif) 
      //triple égal, on vérifie l'égalité stricte
      //On vérifie que l'appel de l'api s'est bien passé (status = 200 = OK )
      if (response.status === 200){
        //si l'appel d'API est OK, on enregistre les restaurants dans la variable restaurant
        const data = response.data.data
        setRestaurants(data)
      }
    }
    //On appelle la méthode créé-e précédemment 
    loadData()
  }, [])




  return (
    <div className="App">
      <Header/>
      <main>
        <Clock/>
        {
          //on vérifie que l'on a bien récupéré les restaurants
          //on créer une boucle sur le tableau restaurant grâce à la fonction "map()"
          //On retourne pour chaque restaurant, une card pour afficher son contenu
          restaurants && restaurants.map(restaurant=>{
            return(
              <Card restaurant={restaurant}/>
            )
          })
        }
      </main>  
      <Footer/>
    </div>
  );
}

export default App;
