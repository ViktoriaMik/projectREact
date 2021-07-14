import {APIbyId, APIimg, APIkey, APImovie, token} from "../constants/constants";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useRouteMatch} from "react-router-dom";
import styles from './style.module.css'
import {
    endLoadingMovies,
    setCurrentPage, setMovies,
    setMoviesByGenre,
    startLoadingMovies
} from "../redux/action-creator/movies-action-creator";
import {
    END_LOADING_MOVIES,
    LOADING_MOVIES,
    ON_MOVIES_LOADED,
    SET_MOVIE_INFO
} from "../redux/action-type/movies-action-type";

const AllMovies = () => {
    const [id, setId] = useState()

    const dispatch = useDispatch();
    const movies = useSelector(({moviesReducer: {movies}}) => movies);
    const loadingMovies = useSelector(({moviesReducer: {loadingMovies}}) => loadingMovies);
    const currentPage = useSelector(({moviesReducer: {currentPage}}) => currentPage);
    const perPage = useSelector(({moviesReducer: {perPage}}) => perPage);
    const totalCount = useSelector(({moviesReducer: {totalCount}}) => totalCount);
    const {url} = useRouteMatch()

    const pages = [1, 2, 3, 4,]

    const fetchMovieByid = async (id) => {
        const responce = await fetch(`${APIbyId}/${id}?${APIkey}`, {headers: {'Authorization': `Bearer ${token}`}})
        const json = await responce.json()
        console.log(json)
        dispatch({type: SET_MOVIE_INFO, payload: json})

    }
    useState(() => {
        fetchMovieByid(id)
    }, [id])

    const fetchMovies = async () => {
        try {
            const responce = await fetch(`${APImovie}?${APIkey}&page=${currentPage}`, {headers: {'Authorization': `Bearer ${token}`}})
            const json = await responce.json()
            console.log(json.results)
            dispatch(setMovies(json.results))

        } catch (e) {
            console.log(e)

        }}

        useEffect(() => {
            fetchMovies()

        }, [currentPage])
        return (
            <div className={styles.container}>

                {movies.map(movie => (
                    <div className={styles.wraper}>

                        <Link to={`/${movie.title}`}>
                            <img
                                onClick={() => {
                                    fetchMovieByid(movie.id)
                                }}
                                className={styles.picture} src={`${APIimg}${movie.poster_path}`} key={movie.title}
                                alt={movie.title}/>

                        </Link>
                    </div>
                ))}
                <div className={styles.paggination}>
                    {pages.map(page => (
                        <span
                            onClick={() => dispatch(setCurrentPage(page))}
                            className={currentPage === page ? styles.pages : styles.page}>
                        {page}</span>
                    ))}
                </div>

            </div>
        )

};
export default AllMovies