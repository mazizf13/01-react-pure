import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const socialMedia = [
  {
    icon: "fa-linkedin",
    href: "https://www.linkedin.com/in/mazizf13/",
  },
  {
    icon: "fa-github",
    href: "https://github.com/mazizf13/",
  },
  {
    icon: "fa-facebook",
    href: "https://www.instagram.com/mazizf_/",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/mazizf_/",
  },
  {
    icon: "fa-twitter",
    href: "https://x.com/xy_aziz",
  },
];

const badges = [
  {
    icon: "fa-js",
    text: "JavaScript",
  },
  {
    icon: "fa-react",
    text: "React",
  },
  {
    icon: "fa-node-js",
    text: "Node.js",
  },
];

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

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, "_blank")}>
      <i className={`fa-brands ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);
  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <SocialButton key={index} icon={data.icon} link={data.href} />
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <SocialButton key={index} icon={data.icon} link={data.href} />
        ))}
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

function Badge({ icon, text }) {
  return (
    <button>
      <i className={`fa-brands ${icon}`}></i> {text}
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      {badges.map((badge, index) => (
        <Badge key={index} icon={badge.icon} text={badge.text} />
      ))}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
