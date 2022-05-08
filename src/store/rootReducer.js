import { GET_IMAGES } from "./types"

const initialState = {
    images: []
}

export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_IMAGES:
            return {...state, images: state.images.concat(action.payload)}
        default: 
            return state
    }
}