import React, {Component, useEffect, useState} from 'react';
import {APIgenders, APIkey, APImovie} from "../constants/constants";
import styles from './style.module.css'
import AllMovies from "./AllMovies";
import {Link, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setGenrePage, setGenres, setPageMovieByGenre} from "../redux/action-creator/genres-action-creator";
import {setCurrentPage, setMoviesByGenre} from "../redux/action-creator/movies-action-creator";
import MovieByGenre from "./MovieByGenre";
import MovieInfo from "./MovieInfo";

const AllGenres = () => {

    const [id, setId] = useState()

    // const currentPage = useSelector(({genresReducer: {currentPage}}) => currentPage)
    const currentPage = useSelector(({moviesReducer: {currentPage}}) => currentPage)
    console.log(currentPage)
    const genres = useSelector(({genresReducer: {genres}}) => genres)
console.log(id)
    const pages = [1, 2, 3, 4]

    const dispatch = useDispatch();
    const fetchGenders = async () => {
        const responce = await fetch(`${APIgenders}list?${APIkey}&language=en-US`)
        const json = await responce.json()
        dispatch(setGenres(json.genres))
        console.log(json)


    }
    const fetchMovieByGenre = async (id) => {
        const responce = await fetch(`${APImovie}?${APIkey}&with_genres=${id}&page=${currentPage}`)
        const json = await responce.json()
        dispatch(setMoviesByGenre(json.results))
        console.log(json.results)
    }

    useEffect(() => {
        fetchGenders()

    }, []);
    useEffect(() => {
        fetchMovieByGenre(id)
    }, [ id,currentPage]);

    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.leftBar}>{genres.map(genre => (
                    <Link  to={`/movies/${genre.name}`}>
                        <div onClick={() => {
                            setId(genre.id)
                            // fetchMovieByGenre(genre.id)

                        }} className={styles.button}>{genre.name}</div>
                    </Link>
                ))}</div>

                <div className={styles.right}>

                    <Switch>
                        <Route path="/" exact>
                            <AllMovies/>
                        </Route>
                        <Route path="/movies" exact>
                            <AllMovies/>
                        </Route>
                        <Route path="/movies/:genre" exact>
                            <div className={styles.rightMovie}><MovieByGenre/></div>
                        </Route>
                        <Route path="/movies/:genre/:details" exact>
                            <MovieInfo/>
                        </Route>
                        <Route path="/:details" exact>
                            <MovieInfo/>
                        </Route>
                    </Switch>


                </div>

            </div>
            <div className={styles.bottom}>
                {pages.map(page => (
                    <span
                        onClick={() => dispatch(setCurrentPage(page))}
                        className={currentPage === page ? styles.pages : styles.page}>
                            {page}</span>
                ))}
            </div>
        </>
    );
}


export default AllGenres;