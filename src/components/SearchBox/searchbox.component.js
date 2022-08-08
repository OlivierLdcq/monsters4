import React from "react";
import "./searchbox.style.css";
const Searchbox = ({ onSearchChange, className, placeholder }) => {
  return (
    <>
      <input
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
        className={className}
      />
    </>
  );
};

export default Searchbox;
