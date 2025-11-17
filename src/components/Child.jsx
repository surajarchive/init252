// Child.jsx
import React from "react";

function Child({ sendData }) {
  const handleClick = () => {
    sendData("Hello from Child"); // Send data to parent
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Send Data</button>
    </div>
  );
}

export default Child;
