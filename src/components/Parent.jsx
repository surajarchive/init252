// Parent.jsx
import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (data) => {
    setMessage(data); // Update parent state
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Data from child: {message}</p>
      <Child sendData={handleDataFromChild} />
    </div>
  );
}

export default Parent;
