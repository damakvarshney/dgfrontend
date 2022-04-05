import React from "react";
import Country from "../countryComponent/Country.jsx";
import "./registration.css";
export default function Registration({ registrationButtonCommand }) {
  return (
    <div className="registration">
      <div className="registrationWrapper">
        <div className="registrationWrapperRight">
          <div className="registrationBody">
            <div className="registrationBodyTop">
              <input
                type="text"
                placeholder="enter first name"
                className="name"
              />
              <input
                type="text"
                placeholder="enter middle name"
                className="name"
              />
              <input
                type="text"
                placeholder="enter last name"
                className="name"
              />
            </div>

            <select name="" id="" className="occupation">
              <option value="" className="occupationItem">
                Select Occupation
              </option>
              <option value="" className="occupationItem">
                Housemaker
              </option>
              <option value="" className="occupationItem">
                Working
              </option>
            </select>

            <div className="registrationBodyMiddle">
              <Country className="selectCountry" />
            </div>

            <input
              type="text"
              placeholder="enter 10 digit number"
              className="phoneNo"
            />

            <button
              className="register"
              onClick={() => registrationButtonCommand()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
