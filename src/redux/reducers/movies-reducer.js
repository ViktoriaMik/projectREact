import {createStore} from "redux";
import {
    ON_MOVIES_LOADED,
    ON_MOVIES_BY_GENRE_LOADED,
    SET_CURRENT_PAGE,
    SET_MOVIE_INFO, LOADING_MOVIES, START_LOADING_MOVIES, END_LOADING_MOVIES
} from "../action-type/movies-action-type";

const initialState = {
    movies: [],
    moviesByGenre: [],
    movieInfo: {},
    loadingMovies:false,
    currentPage: 1,


}

export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MOVIES_LOADED: {
            return {...state, movies: action.payload}
        }
        case ON_MOVIES_BY_GENRE_LOADED: {
            return {...state, moviesByGenre: action.payload}
        }
        case SET_MOVIE_INFO: {
            return {...state, movieInfo: action.payload}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload}
        }
        case START_LOADING_MOVIES: {
            return {...state, loadingMovies:true}
        }
        case END_LOADING_MOVIES: {
            return {...state, loadingMovies:false}
        }


        default:
            return state
    }
}
