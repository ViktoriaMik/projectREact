import logo from './logo.svg';
import './App.css';
import AllMovies from "./components/AllMovies";
import {Provider} from "react-redux";
import {store} from "./store/store";
import Navigation from "./navigation/navigation";



function App() {
    return (
        <Provider store={store}>

            <Navigation/>
        </Provider>

    );
}

export default App;
