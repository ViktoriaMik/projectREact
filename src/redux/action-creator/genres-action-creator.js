import {ON_GENRES_LOADED, SET_GENRES_PAGE, SET_MOVIE_BY_GENRES_PAGE} from "../action-type/genres-action-type";

const setGenres=(payload)=>({type: ON_GENRES_LOADED, payload})
const setPageMovieByGenre=(payload)=>({type: SET_MOVIE_BY_GENRES_PAGE, payload})
const setGenrePage=(payload)=>({type: SET_GENRES_PAGE, payload})

export {
    setGenres,
    setPageMovieByGenre,
    setGenrePage
}