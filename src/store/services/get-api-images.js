import { getImages } from "../actions"

export default function getApiImages() {
    return function (dispatch) {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(data => data.json())
            .then(json => dispatch(getImages(json)))
    }
}