import React, { useState } from 'react';
import GroceryItem from './GroceryItem';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg');

  const addItem = () => {
    if (itemName.trim() === '' || quantity.trim() === '') return;
    setItems([...items, { itemName, quantity, unit }]);
    setItemName('');
    setQuantity('');
  };

  const deleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  return (
    <div className="container">
      <h1>🛒Grocery List</h1>
      <div className="input-area">
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Qty"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="kg">kg</option>
          <option value="g">g</option>
        </select>
        <button onClick={addItem}>➕ Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <GroceryItem
            key={index}
            item={item}
            onDelete={() => deleteItem(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
