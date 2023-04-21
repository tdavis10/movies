import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Edit({ movieList, setMovieList }) {
    const MOVIES = "movies";
    const [rating, setRating] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = movieList
        .map(function (m) {
            return m.id;
        })
        .indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = movieList[index];
        a.id = id;
        a.Name = name;
        a.Genre = genre;
        a.Year = year;
        a.Rating = rating;

        const updatedMovies = movieList.map((movie) => {
            if (movie.id === id) {
                return {
                    ...movie,
                    Name: a.Name,
                    Genre: a.Genre,
                    Year: a.Year,
                    Rating: a.Rating,
                };
            }
            return movie;
        });

        // let  updatedMovie = { id: id, Name: a.Name, Genre: a.Genre, Year: a.Year, Rating: a.Rating }
        // let updatedMovieList = movieList.splice(index, 0, updatedMovie);
        setMovieList(updatedMovies);

        history("/table");
    };

    useEffect(() => {
        setRating(localStorage.getItem("Rating"));
        setYear(localStorage.getItem("Year"));
        setGenre(localStorage.getItem("Genre"));
        setName(localStorage.getItem("Name"));
        setId(localStorage.getItem("Id"));
    }, []);

    return (
        <div>
            <Form className="table-width">
                <h3>Edit Movie</h3>
                <Form.Group className="mb-3" controlId="formName">
                    <div className="label">Name</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenre">
                    <div className="label">Genre</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Genre"
                        value={genre}
                        required
                        onChange={(e) => setGenre(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <div className="label">Year</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Year"
                        value={year}
                        required
                        onChange={(e) => setYear(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRating">
                    <div className="label">Rating</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Rating"
                        value={rating}
                        required
                        onChange={(e) => setRating(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button className="button">
                    <Link to="/table" className="link">
                        Back
                    </Link>
                </Button>
                <Button
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                    className="button"
                >
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default Edit;
