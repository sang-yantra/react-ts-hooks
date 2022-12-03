import React, { useState } from "react";

export default function Example1() {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <h3>Counter : {counter}</h3>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add +1
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          Add -1
        </button>
      </div>
    </div>
  );
}
