import React from "react";
import "../styles/menu.css";
import arrow from "../assets/icons/arrow-clockwise.svg";
import arrowWhite from "../assets/icons/arrow-clockwise-white.svg";
import stopwatch from "../assets/icons/stopwatch.svg";
import stopwatchWhite from "../assets/icons/stopwatch-white.svg";
import keyboard from "../assets/icons/keyboard.svg";
import keyboardWhite from "../assets/icons/keyboard-white.svg";
import check from "../assets/icons/check.svg";
import checkWhite from "../assets/icons/check-white.svg";

function Menu({
  darkMode,
  isEnglish,
  setRandomNum,
  review,
  started,
  setStarted,
  stopwatchTime,
}) {
  return (
    <div className="menu">
      <div className="menu-part">
        <img
          src={darkMode ? arrowWhite : arrow}
          alt="regenerate text"
          onClick={() => {
            setRandomNum(Math.floor(Math.random() * 100));
            setStarted(false);
          }}
        />
      </div>
      <div className="menu-part">
        <div className="review">
          <div className="review-item">
            <div className="review-item-head">
              <div>
                <img
                  src={darkMode ? stopwatchWhite : stopwatch}
                  alt="stopwatch"
                  className="review-item-img"
                />
                <span className="review-item-title">
                  {isEnglish ? "Time" : "Vreme"}
                </span>
              </div>
            </div>
            <span className="review-item-value">
              {started ? stopwatchTime : review.time}
            </span>
          </div>
          <div className="review-item">
            <div className="review-item-head">
              <div>
                <img
                  src={darkMode ? keyboardWhite : keyboard}
                  alt="keyboard"
                  className="review-item-img"
                />
                <span className="review-item-title">
                  {isEnglish ? "Speed" : "Brzina"}
                </span>
              </div>
            </div>
            {started ? (
              <div className="review-item-value-loading">
                <div className="dot-one"></div>
                <div className="dot-two"></div>
                <div className="dot-three"></div>
              </div>
            ) : (
              <span className="review-item-value">
                {review.speed}
                {isEnglish ? " wpm" : " rum"}
              </span>
            )}
          </div>
          <div className="review-item">
            <div className="review-item-head">
              <div>
                <img
                  src={darkMode ? checkWhite : check}
                  alt="checkmark"
                  className="review-item-img"
                />
                <span className="review-item-title">
                  {isEnglish ? "Accuracy" : "Preciznost"}
                </span>
              </div>
            </div>
            {started ? (
              <div className="review-item-value-loading">
                <div className="dot-one"></div>
                <div className="dot-two"></div>
                <div className="dot-three"></div>
              </div>
            ) : (
              <span className="review-item-value">{review.accuracy}%</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
