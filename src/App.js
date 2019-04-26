import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Widget } from "./Widget";

function App() {
  const [count, setCount] = useState(0);
  console.log("providing", count);
  return (
    <div className="App">
      <header className="App-header" onClick={() => setCount(count + 1)}>
        CLICK TO TOGGLE
        {count % 2 === 0 && <Widget />}
      </header>
    </div>
  );
}

export default hot(App);
