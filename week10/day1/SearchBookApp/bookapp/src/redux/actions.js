import {BOOKS} from "./types"



export const dataFromApi = () => async (dispatch) => {
    try {
        const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
        const data = await res.json()

        dispatch({ type: BOOKS, payload: data.items })
    } catch (error) {
        console.log(error);
    }

}

