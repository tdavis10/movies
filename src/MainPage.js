import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./App.css";

function MainPage() {
    return (
        <>
            <img src="./movieImage.jpg" className="image" />
            <div className="right">
                <h1>The Best Movie Website</h1>
                <h5>Have a favorite movie?</h5>
                <p>Add it to our best movies ever database!</p>
                <Link to="/table" style={{ textDecoration: "none" }}>
                    <Button className="button">Add Movie</Button>
                </Link>
            </div>
        </>
    );
}

export default MainPage;
