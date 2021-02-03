import { useReducer } from 'react'
import { clientAxios } from '../../config/axios'
import {
    GET_BREEDS,
    GET_BREED_BY_NAME,
} from '../../types/breedTypes'
import { BreedContext } from './breedContext'
import BreedReducer from './breedReducer'

const BreedState = props => {
    const initialState = {
        breeds:[],
        breed:{}
    }
    const [state,dispatch] = useReducer(BreedReducer,initialState)

    const getBreeds = async (limit) => {
        try {
            const resp = await clientAxios.get(`/breeds?limit=${limit}`);
            dispatch({
                type:GET_BREEDS,
                payload:resp.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    const getBreedByName = async (name) => {
        try {
            const resp = await clientAxios.get(`/breeds/search?name=${name}`)
            const respImage = await clientAxios.get(`/images/search?breed_ids=${resp.data[0].id}`)
            dispatch({
                type:GET_BREED_BY_NAME,
                payload:respImage.data[0]
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <BreedContext.Provider
            value={{
                breeds:state.breeds,
                breed:state.breed,
                getBreeds,
                getBreedByName
            }}
        >
            {props.children}
        </BreedContext.Provider>
    )
}  

export default BreedState;