import { useNavigate } from 'react-router-dom'
import '../styles/CardStyle.css'

const imageUrl = 'http://localhost:1337'

function Card ({ restaurant }) {
  const attributes = restaurant.attributes
  let imageurl = ''
  if (attributes.image.data) {
    imageurl = imageUrl + attributes.image.data.attributes.url
  } else {
    imageurl = 'https://via.placeholer.com/300x150'
  }

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/restaurants/' + restaurant.id)
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <img src={imageurl} />
      </div>

      <div className='card-body'>
        <h4>{attributes.name}</h4>
        <p>{attributes.description}</p>
      </div>

      <div className='card-footer'>
        <button onClick={handleClick}>En savoir plus</button>
      </div>
    </div>
  )
}

export default Card
