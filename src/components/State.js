import React, { useState } from "react";

const State = () => {
  const [number, getNumber] = useState(0);
  const [text, getText] = useState("");

  return (
    <div>
      <button onClick={() => getNumber(number + 1)}>Click Me!</button>
      <br />
      <label>{number}</label>
      <br />
      <input type='text' placeholder='text' onChange={(e) => getText(e.target.value)}/>
      <br />
      <label>{text}</label>
      <br />
    </div>
  )
}

export default State;