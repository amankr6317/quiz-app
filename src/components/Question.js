import React from "react";
import "./Question.css";

const Question = (props) => {
  return (
    <div className="question">
      <div className="question-index">Q{props.questionNumber}:-</div>
      <div className="question-details">{props.question}</div>
    </div>
  );
};

export default Question;
