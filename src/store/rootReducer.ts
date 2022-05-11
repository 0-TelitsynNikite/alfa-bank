import { GET_IMAGES, REMOVE_IMAGE, LIKE_IMAGE, GET_LIKED_IMAGES, GET_LIST, CHANGE_OPTION_ALL, CHANGE_OPTION_LIKE } from "./types.ts"

type TState = {
    mainListImages: [...object[]],
    likedListImages: [...object[]],
    likeSort: boolean,
    allSort: boolean
}

const initialState: TState = {
    mainListImages: [],
    likedListImages: [],
    likeSort: false,
    allSort: true
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return { ...state, mainListImages: state.mainListImages.concat(action.payload) }
        case GET_LIST:
            return { ...state, mainListImages: state.mainListImages }
        case REMOVE_IMAGE:
            return { ...state, mainListImages: state.mainListImages.filter(item => item.id !== action.payload), likedListImages: state.likedListImages.filter((item => item.id !== action.payload))}
        case LIKE_IMAGE:
            return {...state, mainListImages: state.mainListImages.map(item => {
                    if (item.id === action.payload) {
                        item.liked = !item.liked
                    }
                    return item
                })
            }
        case GET_LIKED_IMAGES:
            return { ...state, likedListImages: state.mainListImages.filter(item => item.liked === true) }
        case CHANGE_OPTION_LIKE:
            return {...state, likeSort: true, allSort: false}
            case CHANGE_OPTION_ALL:
                return {...state, likeSort: false, allSort: true}
        default:
            return state
    }
}