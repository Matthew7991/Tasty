import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./SearchBar.scss";
import SearchInput from "../SearchInput/SearchInput";

function SearchBar() {
  return (
    <div>
      <div className="search-bar-title">
        <Link>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h1>Search</h1>
        <div></div>
      </div>
      <SearchInput />
    </div>
  );
}

export default SearchBar;
