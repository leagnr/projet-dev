// import { useNavigate } from 'react-router-dom'
import '../styles/DishStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function Dish ({ dish }) {
  const attributes = dish.attributes
  let imageUrl = ''
  if (attributes.image) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'http:via.placeholder.com/30x30'
  }

  /*   const navigate = useNavigate()
  const handleClick = () => {
    navigate('/restaurants/' + dishes.id)
  } */

  return (
    <div className='card'>
      <div className='card-img'>
        <img src={imageUrl} alt='image' />
      </div>

      <div className='card-body'>
        <h4>{attributes.nom}</h4>
        <p>{attributes.description}</p>
        <p class='price'>{attributes.price} € </p>
      </div>
      <div className='card-footer'>
        <button>Ajouter au panier</button>
      </div>
    </div>
  )
}

export default Dish
