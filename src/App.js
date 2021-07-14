import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import AllMovies from "./components/AllMovies";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Navigation from "./navigation/navigation";
import SimpleSlider from "./components/sliderComponent";


function App() {
    return (
        <Provider store={store}>

            <Navigation/>
        </Provider>

    );
}

export default App;
