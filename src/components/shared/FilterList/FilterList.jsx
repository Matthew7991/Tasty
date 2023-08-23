import React, { useContext, useEffect, useState } from "react";
import "./FilterList.scss";
import { Link, useLocation } from "react-router-dom";
import { filterListValue } from "../../../Context/filterListValue";

function FilterList({ title, api, onHandleFoodList, filterTitle, select }) {
  const [filterList, setFilterList] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const location = useLocation().pathname;
  const [loading, setLoading] = useState(true);
  const setFilterFunction = useContext(filterListValue).setFilterValue;

  const setFilterValue = (event) => {
    setFilterFunction(event.target.dataset.value);
  };

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
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div
      className={
        seeAll
          ? `filter-box ${
              location === "/home" &&
              title === "strCategory" &&
              "filter-box-home"
            } see-all`
          : `filter-box ${
              location === "/home" &&
              title === "strCategory" &&
              "filter-box-home"
            }`
      }
    >
      <div>
        {location === "/home" && <h1>{filterTitle}</h1>}
        <button onClick={handelSeeAll}>{seeAll ? "close" : "See All"}</button>
      </div>
      <ul className="filter-list">
        {location === "/home"
          ? filterList.map((dataItem) => (
              <Link
                to={`/${filterTitle}`}
                className="link"
                key={dataItem[title]}
              >
                <li
                  data-value={dataItem[title].toLowerCase()}
                  onClick={(event) => {
                    setFilterValue(event);
                  }}
                  className="filter-item"
                >
                  {location === "/home" && title === "strCategory" && (
                    <img src={dataItem.strCategoryThumb} data-value={dataItem[title].toLowerCase()} />
                  )}
                  {dataItem[title]}
                </li>
              </Link>
            ))
          : filterList.map((dataItem) => (
              <li
                key={dataItem[title]}
                data-value={dataItem[title].toLowerCase()}
                onClick={onHandleFoodList}
                className={`filter-item ${
                  select === dataItem[title].toLowerCase() && "active2"
                }`}
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
