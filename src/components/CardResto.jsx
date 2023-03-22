import '../styles/RestoStyle.css'

const IMAGE_URL = 'http://localhost:1337'

function CardResto ({ restaurant }) {
  const attributes = restaurant.attributes
  let imageUrl = ''
  if (attributes.image) {
    imageUrl = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageUrl = 'http:via.placeholder.com/500x30'
  }

  return (
    <div className='resto'>
      <div className='resto-img'>
        <img src={imageUrl} />
      </div>
      <div className='resto-info'>
        <h2>{restaurant.attributes.name}</h2>
        <h3>Spécialité</h3>
        <p>{restaurant.attributes.description}</p>
        <p>{restaurant.attributes.adresse.street}</p>
        <p>{restaurant.attributes.adresse.postcode}, {restaurant.attributes.adresse.city}</p>
        <p>{restaurant.attributes.adresse.phone}</p>
        <p>{restaurant.attributes.adresse.email}</p>
        <button>Commander</button>
      </div>
    </div>
  )
}

export default CardResto
