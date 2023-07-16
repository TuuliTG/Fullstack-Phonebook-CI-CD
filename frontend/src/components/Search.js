import React from "react";

const Search = (props) => {
    const handleSearchBarChange = (event) => 
        props.setSearchBar(event.target.value)
    
    return (
        <div>
            search <input value={props.searchBar} onChange={handleSearchBarChange}/>
        </div>
    )
}

export default Search