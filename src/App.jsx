import { useState } from "react";
import childImg from "./assets/child.png";
import bookImg from "./assets/book.png";
import familyImg from "./assets/family.png";
import heartImg from "./assets/heart.png";
import funImg from "./assets/fun.png";
import "./App.css";

const question_margin_left = "30px";
const question_margin_top = "10px";
const question_margin_bottom = "5px";
const title_margin_left = "330px";
const small_box_height = "30px";
const large_box_height = "100px";

function App() {
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
    "1. Favorite book?",
    "2. Favorite animal?",
    "3. Favorite snack?",
    "4. Dream job?",
    "5. Anything else you'd like to share!",
  ];

  return (
    <>
      <h1>Hello Parent</h1>
      <AboutSection />
      <LearningSection />
    </>
  );
}

function AboutSection() {
  const about_questions = [
    "1. What does your child like to be called?",
    "2. What are their favorite activities?",
    "3. What makes them smile?",
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginLeft: title_margin_left,
        }}
      >
        <h2 style={{ marginTop: "30px" }}>About</h2>
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <img src={childImg} width="200" height="250" alt="" />
        <div className="questions" style={{ flex: 1 }}>
          {about_questions.map((question) => (
            <>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {question}
              </p>
              <input
                style={{
                  width: "90%",
                  marginLeft: question_margin_left,
                  borderRadius: "25px",
                  height: "30px",
                  fontSize: "20px",
                  paddingLeft: "10px",
                  boxShadow: "none",
                }}
                text
              ></input>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

function LearningSection() {
  const learning_questions = [
    "1. What are your hopes for your child this year?",
    "2. Are there any learning strengths you'd like me to know about?",
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginLeft: title_margin_left,
        }}
      >
        <h2 style={{ marginTop: "30px" }}>About</h2>
      </div>

      <div style={{ display: "flex", width: "100%" }}>
        <img src={childImg} width="200" height="250" alt="" />
        <div className="questions" style={{ flex: 1 }}>
          {learning_questions.map((question) => (
            <>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {question}
              </p>
              <input
                style={{
                  width: "90%",
                  marginLeft: question_margin_left,
                  borderRadius: "25px",
                  height: "30px",
                  fontSize: "20px",
                  paddingLeft: "10px",
                  boxShadow: "none",
                }}
                text
              ></input>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
