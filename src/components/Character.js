import { Link } from 'react-router-dom';

const Character = ({ character, path, extension, index, id, handleClick }) => {
    return (
        <div className="character__card">
        <Link to={`/comics/${id}`} character={"character"} key={index} style={{textDecoration: 'none'}} >           
        <div className="character__info">
        <div className="img__container">
            <img src={`${path}.${extension}`} alt=""/>
        </div>
        <div className="character__description">
        <h2>{character.name}</h2>
        </div>
        </div>
        </Link>
        <button onClick={() => handleClick(character)} className="fav__button">Add to favorites</button>
        </div>
       
        
    )
}

export default Character;

{/* <Link to={`/comics/${id}`} character={"character"} key={index} style={{textDecoration: 'none'}} > */}