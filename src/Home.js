import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Link, useNavigate } from "react-router-dom";

function Home({ movieList, setMovieList }) {
    let history = useNavigate();

    const handleEdit = (id, name, genre, year, rating) => {
        localStorage.setItem("Rating", rating);
        localStorage.setItem("Year", year);
        localStorage.setItem("Genre", genre);
        localStorage.setItem("Name", name);
        localStorage.setItem("Id", id);
    };

    const handleDelete = (id) => {
        var index = movieList
            .map(function (m) {
                return m.id;
            })
            .indexOf(id);
        const newMovieList = [...movieList];
        newMovieList.splice(index, 1);
        setMovieList(newMovieList);
        history("/table");
    };

    return (
        <Fragment>
            <div className="table-width">
                <h1>Best Movies</h1>
                <div className="table-responsive">
                    <Table bordered hover size="sm" className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Genre</th>
                                <th>Year</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movieList && movieList.length > 0 ? (
                                movieList.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Genre}</td>
                                            <td>{item.Year}</td>
                                            <td>{item.Rating}</td>
                                            <td>
                                                <Link to={"/edit"}>
                                                    <Button
                                                        className="button"
                                                        onClick={() =>
                                                            handleEdit(
                                                                item.id,
                                                                item.Name,
                                                                item.Genre,
                                                                item.Year,
                                                                item.Rating
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                </Link>
                                                &nbsp;
                                                <Button
                                                    className="button"
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="4">No data available</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <br />
                <Link className="d-sm-block" to="/create">
                    <Button className="button" size="lg">
                        Create
                    </Button>
                </Link>
            </div>
        </Fragment>
    );
}

export default Home;
