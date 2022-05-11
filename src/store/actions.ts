import { GET_IMAGES, REMOVE_IMAGE, LIKE_IMAGE, GET_LIKED_IMAGES } from "./types.ts"

type TFunction = (payload?: any) => object

export const getImages:TFunction = payload => ({type: GET_IMAGES, payload})
export const removeImage:TFunction = payload => ({type: REMOVE_IMAGE, payload})
export const likeImage:TFunction = payload => ({type: LIKE_IMAGE, payload})
export const getLikedImages:TFunction = payload => ({type: GET_LIKED_IMAGES, payload})