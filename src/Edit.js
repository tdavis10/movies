import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Edit({movieList, setMovieList}) {
    const MOVIES = "movies"
    const [rating, setRating] = useState("");
    const [year, setYear] = useState("");
    const [genre, setGenre] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = movieList.map(function (m) {
        return m.id;
    }).indexOf(id);

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
                return {...movie, Name: a.Name, Genre: a.Genre, Year: a.Year, Rating: a.Rating }
            }
            return movie;
        });


        // let  updatedMovie = { id: id, Name: a.Name, Genre: a.Genre, Year: a.Year, Rating: a.Rating }
        // let updatedMovieList = movieList.splice(index, 0, updatedMovie);
        setMovieList(updatedMovies);

        history("/");
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
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenre">
                    <Form.Control
                        type="text"
                        placeholder="Enter Genre"
                        value={genre}
                        required
                        onChange={(e) => setGenre(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Control
                        type="text"
                        placeholder="Enter Year"
                        value={year}
                        required
                        onChange={(e) => setYear(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRating">
                    <Form.Control
                        type="text"
                        placeholder="Enter Rating"
                        value={rating}
                        required
                        onChange={(e) => setRating(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">
                    Update
                </Button>
                <Link to="/" className="button">Back</Link>
            </Form>
        </div>
    );
}

export default Edit;