import React from "react";
import { useEffect, useState } from "react";
import "./country.css";
import stateData from "./countryJSON.jsx";

export default function Country() {
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    fetchState();
  }, []);

  const fetchState = () => {
    const data = Object.keys(stateData);
    console.log(data);
    setState(data);
    setCity([]);
  };

  const fetchCity = (k) => {
    const data = Object.values(stateData[k]);
    console.log(data);
    setCity(data);
  };

  return (
    <>
      <div className="countryWrapper">
        <div className="countryWrapperItem">
          <label>Country: </label>
          <select disabled className="select">
            <option className="option">India</option>
          </select>
        </div>

        {/*State Selection */}
        <div className="countryWrapperItem">
          <label>State: </label>
          <select
            className="select"
            onChange={(e) => {
              console.log("Asap", e.target.value);
              fetchCity(e.target.value);
            }}
          >
            <option className="option">Select State</option>
            {state !== "Select State" &&
              state?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>

        {/*City Selection */}
        <div className="countryWrapperItem">
          <label>City: </label>
          <select className="select">
            <option className="option">Select City</option>
            {city !== "Select City" &&
              city?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
      </div>
    </>
  );
}
