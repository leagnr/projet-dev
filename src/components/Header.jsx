import '../styles/HeaderStyle.css'

function Header () {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <span>
          <a href='/'>Accueil</a>
        </span>
        <span>
          <a href='/restaurants'>Restaurants</a>
        </span>
        <span>
          <a href='/about'>À propos</a>
        </span>
      </nav>

      <div className='header-img'>
        <img src='./logo.png' />
      </div>

      <div className='header-rs'>
        <a href='#'>🌑</a>
        <a href='#'>🌑</a>
      </div>
    </header>
  )
}

export default Header
