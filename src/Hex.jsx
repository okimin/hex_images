import React from "react";
import "./Hex.css";
import Brooks from "./Brooks.jpg";

const Hex = () => {
  const url = "./Brooks.jpg";
  return (
    <div className="hex-image" style={{ backgroundImage: `url(${Brooks})` }} />
  );
};

export default Hex;
