import "./App.css";
import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import data from "./data";
function App() {
  const [questions, setQuestions] = useState(data);
  const handleQuestion = (itemId) => {};
  return (
    <div className="App">
      <section className="section">
        <h1 className="section-title">FREQUENTLY ASKED QUESTIONS.</h1>
        <div className="question-container">
          {questions.map((elem) => (
            <SingleQuestion key={elem.id} {...elem} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
