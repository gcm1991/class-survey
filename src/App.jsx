import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import childImg from "./assets/child.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const input_box_width = "800px";
  const question_margin_bottom = "10px";

  const about_questions = [
    "1. What does your child like to be called?",
    "2. What are their favorite activities?",
    "3. What makes them smile?",
  ];

  const learning_questions = [
    "1. What are your hopes for your child this year?",
    "2. Are there any learning strengths you'd like me to know about?",
  ];

  const family_questions = [
    "1. Preferred method of communication",
    "2. Best time to contact you",
    "3. Student strengths and interests",
    "4. Family goals for the school year",
    "5. Cultural traditions or information you'd like me to know",
  ];

  const support_questions = [
    "1. Does your child have any worries about starting school?",
    "2. Is there anything you'd like me to know so I can better support them?",
  ];
  const fun_questions = [
    "1. Does your child have any worries about starting school?",
    "2. Is there anything you'd like me to know so I can better support them?",
  ];

  const all_questions = [
    { title: "About", questions: about_questions },
    { title: "About", questions: learning_questions },
    { title: "About", questions: about_questions },
    { title: "About", questions: about_questions },
    { title: "About", questions: about_questions },
  ];

  return (
    <>
      <h1>Hello Parent</h1>
      <div>
        <h2>About</h2>
        <div style={{ display: "flex", width: "100%" }}>
          <img
            src={childImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <div className="questions">
            {about_questions.map((question) => (
              <>
                {" "}
                <p style={{ marginBottom: question_margin_bottom }}>
                  {question}
                </p>
                <input style={{ width: input_box_width }} text></input>
              </>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2>Learning</h2>
        <div style={{ display: "flex", width: "100%" }}>
          <img
            src={childImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <div className="questions">
            {learning_questions.map((question) => (
              <p style={{ marginBottom: question_margin_bottom }}>
                {question}
                <input style={{ width: input_box_width }} text></input>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2>About</h2>
        <div style={{ display: "flex", width: "100%" }}>
          <img
            src={childImg}
            className="base"
            width="170"
            height="179"
            alt=""
          />
          <div className="questions">
            {about_questions.map((question) => (
              <p style={{ marginBottom: question_margin_bottom }}>
                {question}
                <input style={{ width: input_box_width }} text></input>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
