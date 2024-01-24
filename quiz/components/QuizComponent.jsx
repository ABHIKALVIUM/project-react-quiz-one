import React from "react";
import "../css/QuizComponent.css";

export default function QuizComponent(){

  return(
    <div className="question">
      <h3>Question</h3>
      <div>
        <p>9 of 15</p>
        <h5>Where was the 2011 World Cup held?</h5>
      </div>
      <div className="options">
        <p className="option">Chennai</p>
        <p className="option">Mumbai</p>
      </div>
      <div className="options">
        <p className="option">Jaipur</p>
        <p className="option">Ahmedabad</p>
      </div>
      <div className="buttons">
        <button className="back-btn">Previous</button>
        <button className="next-btn">Next</button>
        <button className="quit-btn">Quit</button>
      </div>
    </div>
  )
}