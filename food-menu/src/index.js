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
  return (
    <main className="menu">
      <h2>Menu Kita</h2>
      <ul className="foods">
        {data.map((food) => (
          <Food foodObj={food} key={food.nama} />
        ))}
      </ul>
      {/* <Food
        nama="Nasi Goreng"
        deskripsi="Nasi yang digoreng dengan bumbu rempah khas Indonesia"
        harga={25000}
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Sate Ayam"
        deskripsi="Potongan daging yam yang ditusuk dan dibakar, disajikan dengan bumbu kacang"
        harga={15000}
        foto="food/sate-ayam.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Gado-Gado"
        deskripsi="Sayuran segar dengan bumbu kacang khas Indonesia"
        harga={20000}
        foto="food/gado-gado.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Rendang"
        deskripsi="Daging yang dimasak dengan santan dan rempah-rempah khas Padang"
        harga={30000}
        foto="food/rendang.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Soto Ayam"
        deskripsi="Sup ayam dengan kuah kuning dan berbagai rempah"
        harga={18000}
        foto="food/soto-ayam.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Martabak"
        deskripsi="Makanan dadakan yang terbuat dari adonan tepung dengan berbagai isian"
        harga={20000}
        foto="food/martabak.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Bakso"
        deskripsi="Bola daging yang direbus disajikan dengan mie dan kuah kaldu"
        harga={12000}
        foto="food/bakso.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Soto Betawi"
        deskripsi="Sup daging dengan kuah santan kental khas Betawi"
        harga={22000}
        foto="food/soto-betawi.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Ayam Penyet"
        deskripsi="Ayam yang digeprek dengan bumbu rempah dan disajikan dengan sambal"
        harga={18000}
        foto="food/ayam-penyet.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 7;
  const jamTutup = 22;

  if (hour < jamBuka || hour > jamTutup) {
    alert("Warteg tutup");
  } else {
    alert("Warteg buka");
  }

  return (
    <footer className="footer">
      {new Date().getFullYear()} Warteg Mang Ucok | jam buka {jamBuka} - jam
      tutup {jamTutup}
    </footer>
  );
}

function Food(props) {
  console.log(props);
  return (
    <li className="food">
      <img
        src={props.foodObj.foto}
        alt={props.foodObj.nama}
        width={100}
        height={70}
      />
      <div>
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <span>{props.foodObj.harga}</span>
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
