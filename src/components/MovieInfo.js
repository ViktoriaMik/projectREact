import React, {Component} from 'react';
import {useSelector} from "react-redux";
import {APIimg} from "../constants/constants";
import styles from './styleInfo.module.css';

const MovieInfo = () => {
    const moviesInfo = useSelector(({moviesReducer: {movieInfo}}) => movieInfo)
    return (
        <div className={styles.infoPage}>
                <img className={styles.background} src={`${APIimg}${moviesInfo.backdrop_path}`} key={moviesInfo.title} alt={moviesInfo.title}/>
                <img className={styles.poster} src={`${APIimg}${moviesInfo.poster_path}`} key={moviesInfo.title} alt={moviesInfo.title}/>
            <div className={styles.description}>
                <div>{moviesInfo.title}</div>
                <div>{moviesInfo.overview}</div>
                <div>run time:{moviesInfo.runtime}</div>
            </div>
        </div>
    );
}


export default MovieInfo;