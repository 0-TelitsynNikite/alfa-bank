import { getImages } from "../store/actions.ts"
import changeApiImages from "../helpers/change-api-images"

export default function getApiImages() {
    return function (dispatch) {
        fetch('https://akabab.github.io/starwars-api/api/all.json')
            .then(data => data.json())
            .then(data => data.map(item => {
                item.liked = false

                if (!changeApiImages(item.image).then(data => data.result)) {
                    item.image = 'https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png'
                }

                return item
            }))
            .then(json => dispatch(getImages(json)))

    }
}

// item.liked = false

// if (!changeApiImages(item.image)) {
//     item.image = 'https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png'
// }

// return item