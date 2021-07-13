import React, {Component} from 'react';
import {useSelector} from "react-redux";
import {Link, Route, Switch, useRouteMatch, useParams} from "react-router-dom";
import styles from "./style.module.css";
import {APIimg} from "../constants/constants";


const MovieByGenre = (props) => {
    const {url} = useRouteMatch()


    const moviesByGenre = useSelector(({moviesReducer: {moviesByGenre}}) => moviesByGenre)

    return (
        <div className={styles.container}>
            {moviesByGenre.map(movie => (
                <div className={styles.wraper}>
                    <Link to={`${url}/${movie.title}`}> <img className={styles.picture}
                                                             src={`${APIimg}${movie.poster_path}`} key={movie.title}
                                                             alt={movie.title}/>

                    </Link>
                </div>
            ))}


        </div>
    );
}


export default MovieByGenre;