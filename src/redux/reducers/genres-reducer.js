import {
    END_GENRES_LOADED,
    ON_GENRES_LOADED, SET_MOVIE_BY_GENRES_PAGE,
    START_GENRES_LOADED
} from "../action-type/genres-action-type";
import {SET_CURRENT_PAGE} from "../action-type/movies-action-type";

const initialState = {
    genres: [],
    isLoading: false,
    currentPage: 1

}

export const GenresReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_GENRES_LOADED: {
            return {...state, genres: action.payload}
        }
        case START_GENRES_LOADED: {
            return {...state, isLoading: true}
        }
        case END_GENRES_LOADED: {
            return {...state, isLoading: false}
        }
        case SET_MOVIE_BY_GENRES_PAGE: {
            return {...state, currentPage: action.payload}
        }

        default:
            return state
    }
}