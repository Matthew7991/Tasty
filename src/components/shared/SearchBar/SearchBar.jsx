import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";
import SearchInput from "../SearchInput/SearchInput";

function SearchBar({onHandleSerachInput}) {
  const navigate = useNavigate();

  return (
    <div className="search-bar">
      <div className="search-bar-title">
        <button className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} size="2xl" onClick={() => navigate(-1)} />
        </button>
        <h1>Search</h1>
        <div></div>
      </div>
      <SearchInput onHandleSerachInput={onHandleSerachInput} />
    </div>
  );
}

export default SearchBar;
