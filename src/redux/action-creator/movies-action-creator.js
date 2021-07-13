import {ON_MOVIES_BY_GENRE_LOADED, SET_CURRENT_PAGE, SET_MOVIE_INFO} from "../action-type/movies-action-type";

const setMoviesByGenre=(payload)=>({type: ON_MOVIES_BY_GENRE_LOADED, payload});
const setCurrentPage=(payload)=>({type: SET_CURRENT_PAGE, payload});
const setMovieInfo=(payload)=>({type: SET_MOVIE_INFO, payload});

export {
    setMoviesByGenre,
    setCurrentPage,
    setMovieInfo
}