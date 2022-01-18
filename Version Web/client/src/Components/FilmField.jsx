import React from "react";

import "./FilmField.css";

const FilmField = (props) => {
  return (
    <input
      type="text"
      name="filmOne"
      placeholder={props.ph}
      className="filmField"
    ></input>
  );
};

export default FilmField;
