import '../styles/FooterStyle.css'
function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-colonne'>
        <h4>Menu</h4>
        <a href='/'>Accueil</a>
        <a href='/restaurants'>Restaurants</a>
        <a href='/about'>À propos</a>
      </div>

      <div className='footer-colonne'>
        <h4>Infos</h4>
        <a>© Copyright 2023</a>
      </div>

      <div className='footer-colonne'>
        <h4>Réseaux sociaux</h4>
        <a>🌑</a>
        <a>🌑</a>
      </div>
    </footer>
  )
}

export default Footer
