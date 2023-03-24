import '../styles/CardMapStyle.css'
function CardMap (adresse) {
  return (
    <>
      <h3>Localisation</h3>

      <div className='map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10840.543443307302!2d-1.5568987!3d47.2139239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eea627b3c8e1%3A0x8e8083356cae38df!2sL&#39;Entrec%C3%B4te!5e0!3m2!1sfr!2sfr!4v1679509517644!5m2!1sfr!2sfr"
          // src={`https://maps.google.com/maps?q=${adresse.street}&hl=fr&z=14&amp&output=embed`}
        />
      </div>
    </>

  )
}

export default CardMap
