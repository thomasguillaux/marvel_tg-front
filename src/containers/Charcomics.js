import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Charcomics = () => {

    const { id } = useParams();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3001/comics/${id}`);
            setData(response.data);
            setIsLoading(false);
        };
        fetchData();
    }, [id])

    return (
        isLoading ? (
            <span>Loading...</span>
        ) : (
        
            <div className="charcomics__section">
            
                <div className="assigned__comics">
                {data.comics.map((comic, index) => {

        const path = data.comics[index].thumbnail.path;
        const splittedPath = path.split("/");
        const extension = data.comics[index].thumbnail.extension;          

        return (
            splittedPath[10] === "image_not_available" || splittedPath[10] === "4c002e0305708" ? (
                ""
            ) : (
                <div className="charcomics__card">
                    <div className="img__container">
                    <img src={`${path}.${extension}`} alt=""/>
                    </div>
                <div className="charcomics__description">
                <span>{data.comics[0].title}</span>
                </div>
                </div>
            )
        )
        })}
        </div>
        </div>
                )
            );
        };

export default Charcomics;