import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "./Add.css"





function Add({movieList, setMovieList}) {

    const MOVIES = "movies";
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");
    const [name, setName] = useState("")

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name;
        let b = genre;
        let c = year;
        let d = rating;

        let  newMovie = { id: uniqueId, Name: a, Genre: b, Year: c, Rating: d }
        let updatedMovieList = [...movieList, newMovie];
        setMovieList(updatedMovieList);

        // Movie.push({ id: uniqueId, Name: a, Genre: b, Year: c, Rating: d });

        history("/");
    };
    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGenre">
                    <Form.Control
                        type="text"
                        placeholder="Enter Genre"
                        required
                        onChange={(e) => setGenre(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formYear">
                    <Form.Control
                        type="text"
                        placeholder="Enter Year"
                        required
                        onChange={(e) => setYear(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRating">
                    <Form.Control
                        type="text"
                        placeholder="Enter Rating"
                        required
                        onChange={(e) => setRating(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">
                    Submit
                </Button>
                <Link to="/" className="button">Back</Link>
            </Form>
        </div>
    );
}

export default Add;