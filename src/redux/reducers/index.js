import {combineReducers} from "redux";
import {MovieReducer} from './movies-reducer';
import {GenresReducer} from './genres-reducer'

export const reducer = combineReducers({
    moviesReducer: MovieReducer,
    genresReducer: GenresReducer
})
