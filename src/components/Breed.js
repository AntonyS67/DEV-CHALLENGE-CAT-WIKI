import { useContext, useEffect } from "react"
import { BreedContext } from "../context/breeds/breedContext"
import {Link} from 'react-router-dom'

function Breed() {
    const breedContext = useContext(BreedContext);
    const {breeds,getBreeds} = breedContext;

    useEffect(()=>{
        getBreeds(4);
        // eslint-disable-next-line
    },[])

    return (
        <div className="section-breed">
            <p>Most Searched Breeds</p>
            <div className="line"></div>
            <div className="see-more">
                <div className="see-more-title">
                    <p>66+ Breeds For you</p>
                    <p>to discover</p>
                </div>
                <Link to="/top">SEE MORE →</Link>
            </div>
            <div className="section-breed-images">
                {
                    breeds.map(breed => (
                        <div key={breed.id} className="card-breed-image">
                            <img src={breed.image.url} alt={breed.name} width="120" height="120"/>
                            <p><Link to={`breed/${breed.name}`}>{breed.name}</Link></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Breed
