import { useState, useEffect } from 'react'
import axios from 'axios';
import Character from '../components/Character'
import HeroCharacters from '../components/HeroCharacters'

const Characters = ({ userToken }) => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
   
            const response = await axios.get("https://boiling-forest-20336.herokuapp.com/characters");
            setData(response.data);
            setResults(response.data.results)
            setIsLoading(false);
        };
        fetchData();
        
    }, []);

    const search = (event) => {

        const inputSearch = event.target.value.toLowerCase();
        const newResults =[];
   
        for (let i = 0; i < data.results.length; i++) {
            if (data.results[i].name.toLowerCase().indexOf(inputSearch) !== -1) {
                newResults.push(data.results[i])
            }  
        } 
        setResults(newResults);
    }

    const handleClick = async (character) => {
        try {
            if (userToken) {
                const response = await axios.post("https://boiling-forest-20336.herokuapp.com/characters", {
                    id: character._id,
                    name: character.name,
                    description: character.description,
                    picture_path: `${character.thumbnail.path}.jpg`,
                    userToken: userToken,
                })
                console.log(response)
                alert(`${character.name} was added to your favorites`);
            } else {
                alert("Please log in")
            }
        } catch (error) {
            console.log("error")
        }
    }

    return (
            isLoading ? (
                <span>Loading...</span>
            ) : (
        <div>
            <HeroCharacters/>
        <div className="characters__container">
            <div className="hero">
                <div>
                    <input type="text" name="searchbar" onChange={search} className="search__bar" placeholder="Search a Marvel character..."/>
                </div>
            </div>
            
            <div className="characters__section">
               
                {results.map((character, index) => {

                    const id = results[index]._id;
                    const path = results[index].thumbnail.path;
                    const splittedPath = path.split("/");
                    const extension = results[index].thumbnail.extension;
                    return (
                        splittedPath[10] === "image_not_available" || splittedPath[10] === "4c002e0305708" ? (
                            ""
                        ) : (
                        <Character 
                        character={character} 
                        path={path} 
                        extension={extension} 
                        index={index} 
                        id={id}
                        handleClick={handleClick}/> 
                        )
                    )
                })}
            </div>
        </div> 
        </div>
        
        )
    )

        
};

export default Characters;