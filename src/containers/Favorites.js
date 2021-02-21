import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Favorites = ({ userToken }) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3001/favorites/${userToken}`);
            setData(response.data);
            setIsLoading(false);
        };
        fetchData();
    }, [userToken]);

    return (
            userToken ? (
                isLoading ? (
                    <span>Loading...</span>
                ) : (
            <div className="favorites__section">
                {data.map((favorite, index) => {
                    return (
                        <div className="character__card">
                        <Link to={`/comics/${favorite.id}`} style={{textDecoration: 'none'}}>
                            <div className="character__info">
                            <div className="img__container">
                            <img src={favorite.picture_path} alt=""/>
                            </div>
                                <div className="character__description">
                                    <h2>{favorite.name}</h2>
                                </div>
                            </div>
                        </Link>
                        </div>
                        
                    )
                })}
            </div>
        
            )) : (
                <span>Please log in</span>
            )
            
        )
    
}

export default Favorites;