import {
    END_LOADING_MOVIES,
    ON_MOVIES_BY_GENRE_LOADED, ON_MOVIES_LOADED,
    SET_CURRENT_PAGE,
    SET_MOVIE_INFO, START_LOADING_MOVIES
} from "../action-type/movies-action-type";

const setMovies=(payload)=>({type: ON_MOVIES_LOADED, payload});
const setMoviesByGenre=(payload)=>({type: ON_MOVIES_BY_GENRE_LOADED, payload});
const setCurrentPage=(payload)=>({type: SET_CURRENT_PAGE, payload});
const setMovieInfo=(payload)=>({type: SET_MOVIE_INFO, payload});
const endLoadingMovies=()=>({type: END_LOADING_MOVIES});
    const startLoadingMovies=()=>({type: START_LOADING_MOVIES});

export {
    setMoviesByGenre,
    setCurrentPage,
    setMovieInfo,
    endLoadingMovies,
    startLoadingMovies,
    setMovies
}