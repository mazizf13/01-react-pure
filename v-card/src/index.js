import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function SocialButton({ icon }) {
  return (
    <button>
      <i className={`fa-brands ${icon}`}></i>
    </button>
  );
}

function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton icon="fa-facebook" />
        <SocialButton icon="fa-twitter" />
        <SocialButton icon="fa-instagram" />
      </div>
      <div className="social-buttons right">
        <SocialButton icon="fa-linkedin" />
        <SocialButton icon="fa-github" />
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Naruto Uzumaki</div>
      </div>
      <div className="title">Anime Engineer</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <span>Experienced in React, Next, Svelte</span>
      <p>
        Naruto (25) is a big fan of MERN web development (MongoDB, Express.js,
        React.js, and Node.js). He specializes in front-end and back-end
        development. He has an understanding of HTML, CSS, and JavaScript, as
        well as experience using frameworks such as React.js for front-end
        development. In addition, he has experience in back-end development
        using Node.js and Express.js, as well as integration with the MongoDB
        database.
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge text="💻 React" />
      <Badge text="🖥️ Next" />
      <Badge text="🖨️ Svelte" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
