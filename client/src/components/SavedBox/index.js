import React from "react";

const SavedBox = props => (

    <div className="container-fluid">
        <br />
        <div className="row">
            <div className="col-4 text-center">
                <p>
                    <strong style={{ fontSize: "20px", textDecorationLine: "underline" }}>{props.title}</strong>
                    <br />
                    <br />
                    <img alt={props.title} className="img-fluid" src={props.src} />
                    <br />
                    <br />
                    <strong>Author:</strong> {props.author}
                    <br />
                    <br />
                    <button onClick={props.saveBook} className="border">X</button>
                </p>
            </div>
            <div className="col-8">
                <p>{props.description}</p>
            </div>
        </div>
        <br />
        <hr />
    </div>

)

export default SavedBox;