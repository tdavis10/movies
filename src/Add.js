import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "./Add.css";

function Add({ movieList, setMovieList }) {
    const MOVIES = "movies";
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [name, setName] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name;
        let b = genre;
        let c = year;
        let d = rating;

        let newMovie = { id: uniqueId, Name: a, Genre: b, Year: c, Rating: d };
        let updatedMovieList = [...movieList, newMovie];
        setMovieList(updatedMovieList);

        // Movie.push({ id: uniqueId, Name: a, Genre: b, Year: c, Rating: d });

        history("/table");
    };
    return (
        <div>
            <Form
                className=""
                style={{
                    marginLeft: "25rem",
                    marginRight: "25rem",
                    marginTop: "2.5rem",
                }}
            >
                <h3>Add Movie</h3>
                <Form.Group className="mb-3" controlId="formName">
                    <div className="label">Name</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenre">
                    <div className="label">Genre</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Genre"
                        required
                        onChange={(e) => setGenre(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <div className="label">Year</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Year"
                        required
                        onChange={(e) => setYear(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRating">
                    <div className="label">Ratings</div>
                    <Form.Control
                        type="text"
                        placeholder="Enter Rating"
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
                    className="button"
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Add;
