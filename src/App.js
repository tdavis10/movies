import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import { useEffect, useState } from "react";
import Movie from "./Movie";
function App() {

  const MOVIES = "movies";

  const [movieList, setMovieList] = useState(initialState());

  useEffect(() => {
    localStorage.setItem(MOVIES, JSON.stringify(movieList));
  }, [movieList]);

    function initialState() {
      let movies;
        console.log("Reading initial state");
        movies = localStorage.getItem(MOVIES);
        if(movies){
            return JSON.parse(movies)
        } else {
            localStorage.setItem(MOVIES, JSON.stringify(Movie))
            movies = localStorage.getItem(MOVIES)
            return movies
        }
    }
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home movieList={movieList} setMovieList={setMovieList}/>} />
                    <Route path="/create" element={<Add movieList={movieList} setMovieList={setMovieList}/>} />
                    <Route path="/edit" element={<Edit movieList={movieList} setMovieList={setMovieList}/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;;
