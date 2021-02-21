import { Link } from 'react-router-dom'
import HeroHome from '../components/HeroHome'
import char_banner from '../assets/char_banner.jpeg'
import comic_banner from '../assets/comic_banner.png'

const Home = () => {
    return (
        <div>
            <HeroHome/>
            <div className="category">
               <div className="characters__category">
                   <div className="characters__banner">
                       <div className="banner__container">
                       <img src={char_banner} alt=""/>
                       </div>
                   </div>
                   <div className="redir__characters">
                   <div>
                    <Link to="/characters" style={{textDecoration: 'none', color : 'black'}}>View all characters</Link>
                    </div>
                   </div>

               </div>
               <div className="comics__category">

                    <div className="redir__comics">
                    <div>
                    <Link to="/comics" style={{textDecoration: 'none', color : 'black'}}>View all comics</Link>
                    </div>
                     </div>
                    <div className="comics__banner">
                    <div className="comic__container">
                       <img src={comic_banner} alt=""/>
                       </div>
                   </div>
                   
               </div>
            </div>
        </div>
    );
};

export default Home;