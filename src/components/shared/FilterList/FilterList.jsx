import React, { useEffect, useState } from "react"
import "./FilterList.scss"

function FilterList({ title, api, onHandleFoodList }) {
  const [filterList, setFilterList] = useState([])
  const [seeAll, setSeeAll] = useState(false)

  const handelSeeAll = () => {
    setSeeAll((prev) => (prev = !prev))
  }

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setFilterList(data.meals))
  }, [])

  return (
    <div className={seeAll ? "filter-box see-all" : "filter-box"}>
      <button onClick={handelSeeAll}>{seeAll ? "close" : "See All"}</button>
      <ul className="filter-list">
        {filterList.map((dataItem) => (
          <li
            key={dataItem[title]}
            data-value={dataItem[title].toLowerCase()}
            onClick={onHandleFoodList}
            className="filter-item">
            {dataItem[title]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterList
