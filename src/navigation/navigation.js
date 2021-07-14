import React, {Component} from 'react';
import styles from"./styles.module.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllMovies from "../components/AllMovies";
import AllGenres from "../components/AllGenders";

import AllGenders from "../components/AllGenders";
import MovieByGenre from "../components/MovieByGenre";

const Navigation = () => {

    return (
        <div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li  className={styles.icon} >
                                <Link style={{color:"silver"}} to="/movies">MOVIEDB</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/">
                        <AllGenders/>
                    </Route>


                </div>
            </Router>
        </div>
    );

}

export default Navigation;