import '../styles/HeaderStyle.css'

function Header() {
    return ( 
        <header className='header'>
            <nav className='header-nav'>
                <span>
                    <a href="#">Menu 1</a>
                </span>
                <span>
                    <a href="#">Menu 2</a>
                </span>
                <span>
                    <a href="#">Menu 3</a>
                </span>
            </nav>
        
            <div className="header-img">
                <img src="http://via.placeholder.com/70x70"></img>
            </div>

            <div className='header-rs'>
                <a href="#">🌑</a>
                <a href="#">🌑</a>
                <a href="#">🌑</a>
            </div>
        </header>
    );
}

export default Header;