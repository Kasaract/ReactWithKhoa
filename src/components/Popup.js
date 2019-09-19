import React, { useState } from "react";

const State = () => {
  const [popupState, setPopupState] = useState(false);

  return (
    <div>
      <button onClick={() => setPopupState(!popupState)}>Click Me!</button>
      <br />
      { popupState ? <p>This text is popped up.</p> : ""}
    </div>
  )
}

export default State;