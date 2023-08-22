import React, { useEffect, useState } from "react";
import "./FilterList.scss";
import { useLocation } from "react-router-dom";

function FilterList({ title, api, onHandleFoodList, filterTitle }) {
  const [filterList, setFilterList] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const location = useLocation().pathname;

  const handelSeeAll = () => {
    setSeeAll((prev) => (prev = !prev));
  };

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setFilterList(
          data[
            location === "/home" && title === "strCategory"
              ? "categories"
              : "meals"
          ]
        );
      });
  }, []);

  return (
    <div className={seeAll ? `filter-box ${location === "/home" && title === "strCategory" && 'filter-box-home'} see-all` : `filter-box ${location === "/home" && title === "strCategory" && 'filter-box-home'}`}>
      <div>
        {location === "/home" && <h1>{filterTitle}</h1>}
        <button onClick={handelSeeAll}>{seeAll ? "close" : "See All"}</button>
      </div>
      <ul className="filter-list">
        {filterList.map((dataItem) => (
          <li
            key={dataItem[title]}
            data-value={dataItem[title].toLowerCase()}
            onClick={onHandleFoodList}
            className="filter-item"
          >
            {location === "/home" && title === "strCategory" && (
              <img src={dataItem.strCategoryThumb} />
            )}
            {dataItem[title]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
