import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleQuestion = ({ title, question, handle }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <div className="question-top">
        <h3 className="qustion-title">{title}</h3>
        <span className="question-icon" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
      </div>
      <div className="question-text">
        <p className={`${showInfo ? "active" : ""}`}>{question}</p>
      </div>
    </div>
  );
};

export default SingleQuestion;
