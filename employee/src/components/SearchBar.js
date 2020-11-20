import React from "react";

function SearchBar() {
    return (
        <div className="searchbox">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="">
                        Search
                    </span>
                </div>
                <input 
                type="search"
                placeholder = "Name"
                ></input>
            </div>
        </div>
    )
}

export default SearchBar;