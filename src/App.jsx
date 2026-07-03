import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import childImg from "./assets/child.png";
import bookImg from "./assets/book.jpg";
import familyImg from "./assets/family.jpg";
import heartImg from "./assets/heart.jpg";
import sunGlassesImg from "./assets/sunglasses.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const input_box_width = "800px";
  const question_margin_top = "10px";
  const question_margin_bottom = "5px";
  const question_margin_left = "30px";
  const title_margin_left = "330px";

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
    { title: "About", image: childImg, questions: about_questions },
    {
      title: "Learning",
      image: bookImg,
      questions: learning_questions,
    },
    {
      title: "Family",
      image: familyImg,
      questions: family_questions,
    },
    {
      title: "Support",
      image: heartImg,
      questions: support_questions,
    },
    {
      title: "Just For Fun",
      image: sunGlassesImg,
      questions: fun_questions,
    },
  ];

  return (
    <>
      <h1>Hello Parent</h1>
      <div>
        {all_questions.map((section) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                marginLeft: title_margin_left,
              }}
            >
              <h2 style={{ marginTop: "30px" }}>{section.title}</h2>
            </div>

            <div style={{ display: "flex", width: "100%" }}>
              <img
                src={section.image}
                className="base"
                width="200"
                height="250"
                alt=""
              />
              <div className="questions" style={{ flex: 1 }}>
                {section.questions.map((question) => (
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
                      }}
                      text
                    ></input>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
