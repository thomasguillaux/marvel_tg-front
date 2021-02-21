import { useState, useEffect } from 'react'
import axios from 'axios';
import HeroComics from '../components/HeroComics';

const Comics = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://boiling-forest-20336.herokuapp.com/comics");
            setData(response.data);
            setResults(response.data.results)
            setIsLoading(false);
        };
        fetchData();
    }, [])

    const search = (event) => {

        const inputSearch = event.target.value.toLowerCase();
        
        const newResults =[];

        for (let i = 0; i < data.results.length; i++) {

            if (data.results[i].title.toLowerCase().indexOf(inputSearch) !== -1) {

                newResults.push(data.results[i])
            }
        }
        setResults(newResults)
        console.log(results)
    }

    return (
            isLoading ? (
                <span>Loading...</span>
            ) : (
        <div>
            <HeroComics/>
    
                <div>
                <input type="text" name="searchbar" onChange={search} className="search__bar" placeholder="Search a Marvel comic"/>
                </div>

            <div className="comics__section">
               
                {results.map((comic, index) => {

                    const path = results[index].thumbnail.path;
                    const splittedPath = path.split("/");
                    const extension = results[index].thumbnail.extension;
                    return (

                        splittedPath[10] === "image_not_available" || splittedPath[10] === "4c002e0305708" ? (
                            ""
                        ) : (
                           
                            <div className="comics__card">
                            <div className="img__container">
                            <img src={`${path}.${extension}`} alt=""/>
                            </div>
                            <div className="comic__description">
                            <h2>{results[index].title}</h2>
                            </div>
                            </div>
                   
                        )
                    )
                })}
            </div>
        </div> 

        )
    )
};

export default Comics;