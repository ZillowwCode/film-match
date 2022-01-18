import React from "react";

import "./FilmField.css";

const FilmField = (props) => {
  const handleChange = (e) => {
    props.change(e.target.value);
  };

  return (
    <input
      value={props.value}
      onChange={handleChange}
      type="text"
      name="filmOne"
      placeholder={props.ph}
      className="filmField"
    ></input>
  );
};

export default FilmField;
