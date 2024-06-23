import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Warung Mang Ucok</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Menu Kita</h2>
      <Food />
      <Food />
      <Food />
      <Food />
    </div>
  );
}

function Footer() {
  return <footer>{new Date().getFullYear()} Warung Mang Ucok</footer>;
}

function Food() {
  return (
    <div>
      <img
        src="food/soto-betawi.jpg"
        alt="Soto Betawi"
        width={100}
        height={70}
      />
      <h2>Soto Betawi</h2>
      <p>Soto Betawi dari Jakarta</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
