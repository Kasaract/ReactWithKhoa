import React, { useState } from "react";

  const State = () => {
    const [number, getNumber] = useState(0);
    
  const handleInputChange = (event) => {
        event.setState({
            [event.target.name]: event.target.value
        })
    }
  return (
    <div>
      <button onClick={() => getNumber(number + 1)}>Click Me!</button>
      <br />
      <label>{number}</label>
      <br />
      <input type='text' placeholder='text' onChange={this.handleInputChange}/>
    </div>
  )
}

export default State;