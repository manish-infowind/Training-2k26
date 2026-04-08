function Items({ itemcheck }) {
  const item1 = "Rajma";
  const item2 = "Chawal";

  return (
    <div className="items-box">
      <h2>Item name: {itemcheck ? item1 : item2}</h2>
    </div>
  );
}

export default Items;