import React, { useState } from "react";
import "./App.css";
import addItem from "./addData";
import toggleDetails from "./toggle";

const App = () => {
  const [showdata, setdata] = useState(0);
  const [counter, setcounter] = useState(0);
  const [items, setitems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="box">
      <h2 className="header"> React Assignment 01 </h2>

      <div className="content">
        {showdata ? (
          <button
            className="btn"
            onClick={() =>
              toggleDetails(showdata, setdata, counter, setcounter)
            }
          >
            Hide details
          </button>
        ) : (
          <button
            className="btn"
            onClick={() =>
              toggleDetails(showdata, setdata, counter, setcounter)
            }
          >
            Display details
          </button>
        )}

        {showdata && (
          <p className="details">Data will be displayed on odd clicks.</p>
        )}

        <p className="click-count">
          Counter for 'Display details/Hide Details' button clicks : {counter}
        </p>

        <div className="input-container">
          <input
            type="text"
            className="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Your Data"
          />

          <button
            className="btn add-button"
            onClick={() => addItem(items, setitems, inputValue, setInputValue)}
          >
            Add
          </button>
        </div>

        <ul className="item-list">
          {items.map((item, index) => {
            let itemClassName = "item";
            if ((index + 1) % 5 === 0) {
              itemClassName += " highlight";
            }
            return (
              <li className={itemClassName} key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;

{
  /* <style>
  
</style> */
}