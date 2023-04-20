import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";
import { Link, useNavigate } from "react-router-dom";

function Home({movieList, setMovieList}) {
    let history = useNavigate();


    const handleEdit = (id, name, genre, year, rating) => {
        localStorage.setItem("Rating", rating);
        localStorage.setItem("Year", year);
        localStorage.setItem("Genre", genre);
        localStorage.setItem("Name", name);
        localStorage.setItem("Id", id);
    };

    //chat
    const handleDelete = (id) => {
        var index = movieList.map(function (m) {
            return m.id;
        }).indexOf(id);
        const newMovieList = [...movieList];
        newMovieList.splice(index, 1);
        setMovieList(newMovieList);
        history("/");
      };

    // const handleDelete = (id, movieList) => {

    //     let newMovieList = movieList;

    //     var index = movieList.map(function (m) {
    //         return m.id;
    //     }).indexOf(id);
        

    //     newMovieList.splice(index, 1)

    //     setMovieList(newMovieList);

    //     history("/");
    // };
    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieList && movieList.length > 0
                            ? movieList.map((item) => {
                                  return (
                                      <tr>
                                          <td>{item.Name}</td>
                                          <td>{item.Genre}</td>
                                          <td>{item.Year}</td>
                                          <td>{item.Rating}</td>
                                          <td>
                                              <Link to={"/edit"}>
                                                  <Button
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
                            : "No data available"}
                    </tbody>
                </Table>
                <br></br>
                <Link className="" to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    );
}

export default Home;