import {
    GET_BREEDS,
    GET_BREED_BY_NAME,
    GET_BREEDS_SEARCH
} from '../../types/breedTypes'
const BreedReducer = (state,action) => {
    
    switch (action.type) {
        case GET_BREEDS:
            return {
                ...state,
                breeds:action.payload
            }
        case GET_BREEDS_SEARCH:
            return{
                ...state,
                breedsSearch:action.payload.map(it => {
                    let br = [];
                    br = {id:it.id,name:it.name}
                    return br
                })
            }
        case GET_BREED_BY_NAME:
            return {
                ...state,
                breed:action.payload
            }
        default:
            return state;
    }
}

export default BreedReducer;