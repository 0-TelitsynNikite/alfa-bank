import { getImages } from "../store/actions.ts"

export default function getApiImages() {
    return function (dispatch) {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(data => data.json())
            .then(data => data.map(item => {
                item.liked = false
                return item
            }))
            .then(json => dispatch(getImages(json)))
    }
}