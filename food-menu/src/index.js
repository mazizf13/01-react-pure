import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: "red",
    fontSize: "50px",
    textTransform: "uppercase",
  };

  return <h1 style={style}>Warteg Mang Ucok</h1>;
}

function Menu() {
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Aneka makanan Indonesia yang disajikan oleh Warteg Mang Ucok sebagai
            pemenuhan makanan sehat yang diperlukan dalam kehidupan sehari-hari.
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Food foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        <p>Lagi mudik, Senin depan baru buka.</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 6;
  const jamTutup = 21;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterCloseHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warteg Mang Ucok | jam buka {jamBuka} - jam
          tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterCloseHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <p>
        maap masih tutup, bukanya jam {jamBuka} - {jamTutup}
      </p>
    </footer>
  );
}

function Food({ foodObj }) {
  const { nama, deskripsi, harga, foto, stok } = foodObj;
  console.log(foto);
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width={100} height={70} />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? `Rp ${harga.toLocaleString()}` : "Habis"}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
