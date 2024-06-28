const listItems = [
  {
    id: 1,
    title: "Eat",
    done: false,
  },
  {
    id: 2,
    title: "Sleep",
    done: true,
  },
  {
    id: 3,
    title: "Code",
    done: false,
  },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <span className="logo">📝 GoCheck ✅</span>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>Ada yang mau dicata nggak? 🤔</h3>
    </div>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" name="" id="" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      Kamu punya x catatan dan baru x yang di-checklist (x%) ✅
    </footer>
  );
}

export default App;
