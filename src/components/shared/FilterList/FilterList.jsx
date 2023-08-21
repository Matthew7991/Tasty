import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FilterList.scss";

function FilterList({ dataList, onHandleFoodList }) {
  const [seeAll, setSeeAll] = useState(false);
  

  const handelSeeAll = () => {
    setSeeAll((prev) => (prev = !prev));
  };
  return (
    <div className={seeAll ? "filter-box see-all" : "filter-box"}>
      <button onClick={handelSeeAll}>{seeAll ? "close" : "See All"}</button>
      <ul className="filter-list">
        {dataList.map((dataItem) => (
          <li key={dataItem.strArea} data-value={dataItem.strArea.toLowerCase()} className="filter-item" onClick={onHandleFoodList} >
            {dataItem.strArea}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterList;
