import { useState } from "react";
import childImg from "./assets/child.png";
import bookImg from "./assets/book.png";
import familyImg from "./assets/family.png";
import heartImg from "./assets/heart.png";
import funImg from "./assets/fun.png";
import beeImg from "./assets/bee.png";
import "./App.css";

const question_margin_left = "30px";
const question_margin_top = "10px";
const question_margin_bottom = "5px";
const title_margin_left = "330px";
const small_box_height = "30px";
const large_box_height = "100px";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1 style={{ fontSize: "40px" }}>Welcome to ms. Stone's</h1>
          <h1 style={{ marginBottom: "30px" }}>Kindergarten Class!</h1>
        </div>

        <img src={beeImg} width="100" height="100" />
      </div>
      <AboutSection title="About" image={childImg} />
      <LearningSection title="Learning" image={bookImg} />
      <FamilySection title="Family" image={familyImg} />
      <SupportSection title="Support" image={heartImg} />
      <FunSection title="Fun" image={funImg} />

      <div className="submit-container">
        <button className="submit-button">Submit</button>
      </div>
    </>
  );
}

function AboutSection({ title, image }) {
  const about_questions = [
    "1. What does your student like to be called?",
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
        <h2 style={{ marginTop: "30px" }}>{title}</h2>
      </div>

      <div style={{ display: "flex", width: "100%", paddingLeft: "25px" }}>
        <img src={image} width="200" height="250" alt="" />
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
              <input className="survey-input survey-input-full" type="text" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

function LearningSection({ title, image }) {
  const learning_questions = [
    "1. What are your hopes for your student this year?",
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
        <h2 style={{ marginTop: "30px" }}>{title}</h2>
      </div>

      <div style={{ display: "flex", width: "100%", paddingLeft: "25px" }}>
        <img src={image} width="200" height="250" alt="" />
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
              <textarea className="survey-input-area" type="text" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

function FamilySection({ title, image }) {
  const family_questions = [
    "1. Preferred method of communication",
    "2. Best time to contact you",
    "3. Student strengths and interests",
    "4. Family goals for the school year",
    "5. Cultural traditions or information you'd like me to know",
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
        <h2 style={{ marginTop: "30px" }}>{title}</h2>
      </div>

      <div style={{ display: "flex", width: "100%", paddingLeft: "25px" }}>
        <img src={image} width="200" height="250" alt="" />
        <div className="questions" style={{ flex: 1 }}>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ flex: 1 }}>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {family_questions[0]}
              </p>
              <input
                className="survey-input survey-input survey-input-left-half"
                type="text"
              />
            </div>
            <div style={{ flex: 1 }}>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {family_questions[1]}
              </p>
              <input
                className="survey-input survey-input-right-half"
                type="text"
              />
            </div>
          </div>

          {family_questions.slice(2).map((question) => (
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
              <input className="survey-input survey-input-full" type="text" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

function SupportSection({ title, image }) {
  const support_questions = [
    "1. Does your student have any worries about starting school?",
    "2. Is there anything you'd like me to know so I can better support them?",
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
        <h2 style={{ marginTop: "30px" }}>{title}</h2>
      </div>

      <div style={{ display: "flex", width: "100%", paddingLeft: "25px" }}>
        <img src={image} width="200" height="250" alt="" />
        <div className="questions" style={{ flex: 1 }}>
          {support_questions.map((question) => (
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
              <textarea className="survey-input-area" type="text" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

function FunSection({ title, image }) {
  const fun_questions = [
    "1. Favorite book?",
    "2. Favorite animal?",
    "3. Favorite snack?",
    "4. Dream job?",
    "5. Anything else you'd like to share!",
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
        <h2 style={{ marginTop: "30px" }}>{title}</h2>
      </div>

      <div style={{ display: "flex", width: "100%", paddingLeft: "25px" }}>
        <img src={image} width="200" height="250" alt="" />
        <div className="questions" style={{ flex: 1 }}>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ flex: 1 }}>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {fun_questions[0]}
              </p>
              <input
                className="survey-input survey-input-left-half"
                type="text"
              />
            </div>
            <div style={{ flex: 1 }}>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {fun_questions[1]}
              </p>
              <input
                className="survey-input survey-input-right-half"
                type="text"
              />
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ flex: 1 }}>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {fun_questions[2]}
              </p>
              <input
                className="survey-input survey-input-left-half"
                type="text"
              />
            </div>
            <div style={{ flex: 1 }}>
              {" "}
              <p
                style={{
                  marginTop: question_margin_top,
                  marginBottom: question_margin_bottom,
                  marginLeft: question_margin_left,
                }}
              >
                {fun_questions[3]}
              </p>
              <input
                className="survey-input survey-input-right-half"
                type="text"
              />
            </div>
          </div>
          {fun_questions.slice(4).map((question) => (
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
              <textarea className="survey-input-area" type="text" />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
