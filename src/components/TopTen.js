import React, { useContext, useEffect } from 'react'
import { BreedContext } from '../context/breeds/breedContext'
import {Link} from 'react-router-dom'
function TopTen() {
    const limit = 10;
    const breedContext = useContext(BreedContext);
    const {breeds,getBreeds} = breedContext;

    useEffect(()=>{
        getBreeds(limit)
        // eslint-disable-next-line
    },[])
    return (
        <div className="container-top">
            <h2 className="container-top-title">Top {limit} most searched breeds</h2>
            <div className="container-images-top">
                {
                    breeds.map((breed,index) => (
                        <div key={breed.id} className="container-item-top">
                            <img src={breed.image.url} width="140" height="140" alt={breed.name}/>
                            <div className="container-description-top">
                                <h2><Link to={`breed/${breed.name}`}>{index+1}. {breed.name}</Link></h2>
                                <p>{breed.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TopTen
