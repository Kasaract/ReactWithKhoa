import React, { useState } from "react";

const About = () => {
  const [number, getNumber] = useState(0);

  return (
    <div>
      <button onClick={() => getNumber(number + 1)}>Click Me!</button>
      <br />
      <label>{number}</label>

      <br />
      <input type="text" placeholder="Type here"/>
    </div>
  )
}
  
export default About;