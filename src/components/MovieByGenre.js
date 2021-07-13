import React, {Component, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Switch, useRouteMatch, useParams} from "react-router-dom";
import styles from "./style.module.css";
import {APIbyId, APIimg, APIkey, APImovie, token} from "../constants/constants";
import {ON_MOVIES_LOADED, SET_MOVIE_INFO} from "../redux/action-type/movies-action-type";


const MovieByGenre = (props) => {
    const {url} = useRouteMatch()
    const [id, setId] = useState()

    const dispatch = useDispatch()

    const fetchMovieByid = async (id) => {
        const responce = await fetch(`${APIbyId}/${id}?${APIkey}`, {headers: {'Authorization': `Bearer ${token}`}})
        const json = await responce.json()
        console.log(json)
        dispatch({type: SET_MOVIE_INFO, payload: json})

    }
    useState(() => {
        fetchMovieByid(id)
    }, [id])
    const moviesByGenre = useSelector(({moviesReducer: {moviesByGenre}}) => moviesByGenre)

    return (
        <div className={styles.container}>
            {moviesByGenre.map(movie => (
                <div className={styles.wraper}>
                    <Link to={`${url}/${movie.title}`}>
                        <img className={styles.picture}
                             src={`${APIimg}${movie.poster_path}`}
                             key={movie.title}
                             alt={movie.title}
                             onClick={() => {
                                 fetchMovieByid(movie.id)
                             }}
                        />

                    </Link>
                </div>
            ))}


        </div>
    );
}


export default MovieByGenre;