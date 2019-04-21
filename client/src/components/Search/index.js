import React from "react";

const SearchBox = props => (

    <form>
        <div className="form-group">
            <input
                onChange={props.handleInputChange}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                id="search"
                placeholder="Type Author's name : Name of book"
            />

            <br />
            <button onClick={props.handleFormSubmit} className="btn btn-success">Search</button>
        </div>
    </form>

)

export default SearchBox;