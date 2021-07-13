import React, {Component} from 'react';
import {useSelector} from "react-redux";
import {Link, Route, Switch,useRouteMatch,useParams} from "react-router-dom";


const MovieByGenre = (props) => {
    const {url}=useRouteMatch()


    const moviesByGenre = useSelector(({moviesReducer: {moviesByGenre}}) => moviesByGenre)

    return (
        <div>
            {moviesByGenre.map(movie => (
                <Link to={`${url}/${movie.title}`}><h3>{movie.title}</h3>
                </Link>
            ))}


        </div>
    );
}


export default MovieByGenre;