import React from "react";
import "./filter.css";
import Filteritem from "./filterItem/filteritem";

const Filter = ({ filterlist }) => {
  return (
    <div className="filters cur-po">
      {filterlist &&
        filterlist.map((filter) => {
          return <Filteritem filter={filter} key={filter.id} />;
        })}
    </div>
  );
};

export default Filter;
