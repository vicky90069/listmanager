import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  const handleAddItem = () => {
    if (currentItem) {
      setItems([...items, currentItem]);
      setCurrentItem('');
    }
  };

  return (
    <div className="container">
      <div className="form">
        <label htmlFor="item-input" className="label">Item List</label>
        <input 
          type="text" 
          id="item-input" 
          className="input" 
          placeholder="Enter item" 
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)} 
        />
        <button className="add-btn" onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="list">
        {items.map((item, index) => (
          <div key={index} className="list-item">{item}</div>
        ))}
      </div>

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body, #root {
            height: 100%;
          }

          .container {
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          
            height: 100vh;
            max-width: 900px;
            margin: 0 auto;
          }

          .form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }

          .label {
            font-size: 36px;
            font-weight: bold;
          }

          .input {
            padding: 10px;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
          }

          .input:focus {
            border-color: #4CAF50;
          }

          .add-btn {
            padding: 10px;
            background-color: #4CAF50;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
          }

          .add-btn:hover {
            background-color: #45a049;
          }

          .list {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
          }

          .list-item {
            padding: 10px;
            background-color: #f4f4f4;
            border: 1px solid #ddd;
            margin: 5px 0;
            border-radius: 5px;
          }

          @media (max-width: 600px) {
            .container {
              padding: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
