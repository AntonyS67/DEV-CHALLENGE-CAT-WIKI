import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail';
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { BreedContext } from '../context/breeds/breedContext';

function DetailBreed() {
    const {name} = useParams();

    const breedContext = useContext(BreedContext);
    const {breed,getBreedByName} = breedContext;
    useEffect(() => {
        getBreedByName(name)
        // eslint-disable-next-line
    },[])
    return (
        <div>
            <Nav/>
            <Detail breed={breed}/>
            <Footer/>
        </div>
    )
}

export default DetailBreed
