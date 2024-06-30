import React from "react";

function Stats({ listItems }) {
  const totalItems = listItems.length;
  const doneItems = listItems.filter((item) => item.done).length;
  const percentage =
    totalItems > 0 ? ((doneItems / totalItems) * 100).toFixed(2) : 0;

  return (
    <footer className="stats">
      Kamu punya {totalItems} catatan dan baru {doneItems} yang di-checklist (
      {percentage}%) ✅
    </footer>
  );
}

export default Stats;
