//import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./index.css";
import "./custom.scss";

const HomePage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [email, setEmail] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailTest = emailRegex.test(event.target.value);
    setArrow(emailTest);
  };

  return (
    <>
      <div className="bg-clr">
        <div className="inside-cont">
          <div
            className={`form-floating form-mail-input ${
              isFocused ? "focused" : ""
            }`}
          >
            <input
              type="email"
              className={`form-control ${isFocused ? "box-shadow-none" : ""}`}
              id="floatingInput"
              placeholder=""
              value={email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput" className="mail-text">
              Email address
            </label>
            {arrow ? (
              <button
                type="button"
                className={`${isFocused ? "arrow focused" : "arrow"}`}
              >
                <FaArrowRight />
              </button>
            ) : null}
          </div>
        </div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </>
  );
};

export default HomePage;
