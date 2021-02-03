import {
    GET_BREEDS,
    GET_BREED_BY_NAME,
} from '../../types/breedTypes'
const BreedReducer = (state,action) => {
    switch (action.type) {
        case GET_BREEDS:
            return {
                ...state,
                breeds:action.payload
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