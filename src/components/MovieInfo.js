import React, {Component} from 'react';
import {useSelector} from "react-redux";
import {APIimg} from "../constants/constants";
import styles from './styleInfo.module.css';

import ReactStars from "react-rating-stars-component";




const MovieInfo = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const moviesInfo = useSelector(({moviesReducer: {movieInfo}}) => movieInfo)
    return (

        <div className={styles.infoPage}>
            <img className={styles.background} src={`${APIimg}${moviesInfo.backdrop_path}`} key={moviesInfo.title}
                 alt={moviesInfo.title}/>
            <img className={styles.poster} src={`${APIimg}${moviesInfo.poster_path}`} key={moviesInfo.title}
                 alt={moviesInfo.title}/>
            <div className={styles.description}>
                <div>{moviesInfo.title}</div>
                <div>{moviesInfo.overview}</div>
                <div>run time:{moviesInfo.runtime}</div>
            </div>
            <ReactStars
                count={10}
                value={moviesInfo.vote_average}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />,
        </div>
    );
}


export default MovieInfo;