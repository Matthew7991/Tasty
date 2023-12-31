import React, { useState } from "react";
import "./SearchInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchInput({onHandleSerachInput}) {
  

  return (
    <div className="search-bar-input">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" placeholder="Search" onChange={onHandleSerachInput} />
    </div>
  );
}

export default SearchInput;
