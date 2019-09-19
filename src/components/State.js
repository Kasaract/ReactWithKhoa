import React, { useState, useEffect } from "react";

const State = () => {
  const [number, getNumber] = useState(0);
  const [text, getText] = useState("");

  useEffect(
    () => console.log("Hey, this is useEffect")
    // fetch(api.url)
    //   .then(res => res.json())
    //   .then(getText(res))
    , 
    [])

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