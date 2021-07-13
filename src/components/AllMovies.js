import {APIimg, APIkey, APImovie, token} from "../constants/constants";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import moviesReducer from "../redux/reducers/movies-reducer";
import {store} from "../store/store";
import {Link} from "react-router-dom";
import styles from './style.module.css'
import {setCurrentPage} from "../redux/action-creator/movies-action-creator";

const AllMovies = () => {
    const dispatch = useDispatch();
    const movies = useSelector(({moviesReducer: {movies}}) => movies);
    const currentPage = useSelector(({moviesReducer: {currentPage}}) => currentPage);
    const perPage = useSelector(({moviesReducer: {perPage}}) => perPage);
    const totalCount = useSelector(({moviesReducer: {totalCount}}) => totalCount);

    const pages = [1, 2, 3, 4, 5, 6]

    const fetchMovies = async () => {
        const responce = await fetch(`${APImovie}?${APIkey}&page=${currentPage}`, {headers: {'Authorization': `Bearer ${token}`}})
        const json = await responce.json()
        console.log(json.results)
        dispatch({type: 'ON_MOVIES_LOADED', payload: json.results})
    }

    useEffect(() => {
        fetchMovies()

    }, [currentPage])
    return (
        <div className={styles.container}>
            {
                movies.map(movie => (
                    <div className={styles.wraper}>

                        <Link>
                        <img  className={styles.picture} src={`${APIimg}${movie.poster_path}`} key={movie.title} alt={movie.title}/>

                        </Link>
                    </div>
                ))}
            <div>
                {pages.map(page => (
                    <span
                        onClick={()=>dispatch(setCurrentPage(page))}
                        className={currentPage === page ? styles.pages : styles.page}>
                        {page}</span>
                ))}
            </div>

        </div>
    )
}
export default AllMovies