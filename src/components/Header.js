import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = ({ setUser, userToken }) => {

    
    return (
        <div className="header__container">
            <div className="logo__nav">
            <Link to="/">
                <img src={logo} alt="Marvel Logo"/>
            </Link>
            </div>
            <div className="nav__links">
            <div>
            <Link to="/characters" style={{textDecoration: 'none', color : 'black'}}>Characters</Link>
            </div>
            <div>
            <Link to="/comics" style={{textDecoration: 'none', color : 'black'}}>Comics</Link>
            </div>
            <div>
            <Link to={`/favorites/${userToken}`} style={{textDecoration: 'none', color : 'black'}}>Favorites</Link>
            </div>
            <div>
                {userToken ? (
                    <button className="signout" onClick={() => setUser(null)}>Sign out</button>
                ) : (
                    <Link className="login" to="/login" style={{
                        borderRadius: '2Opx!important',
                        textDecoration: 'none',
                        color: 'black',
                        border: 'black solid 2px',
                        padding: '7px 12px',
                        
                    }}>Login</Link>
                )}
            </div>
            
            </div>
            
        </div>
    )
}

export default Header;