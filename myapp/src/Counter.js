import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(false);
  return (
    <div>
      <button onClick={() => setShowCount(!showCount)}>{showCount ?'hide ':'show'}</button>
      {showCount ? (
        <>
          <h1>counter show open</h1>
          <h1>count -{count}</h1>
          <button onClick={()=>setCount(count+1)}>increes</button><br></br>
          <button onClick={()=>setCount(count-1)}>decrement</button>
        </>
      ) : null}
    </div>
  );
}

export default Counter;
