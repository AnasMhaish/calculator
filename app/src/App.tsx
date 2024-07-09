import React from "react";
import Calculator from "./components/Calculator"; // Import the Calculator component

import "./App.css";

function App() {
  return (
    <>
      <h1>Calculator</h1>

      <div className="center-container">
        <div className="column">
          <Calculator />
        </div>
      </div>

      <p className="footer">Designed and Developed by: <a href="https://www.linkedin.com/in/anasmhaish/">Anas Mhaish</a></p>
    </>
  );
}

export default App;
