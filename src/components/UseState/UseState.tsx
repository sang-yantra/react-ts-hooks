import React from "react";

export interface IUseStateProps {}

const UseState: React.FC<IUseStateProps> = () => {
  return (
    <div>
      <h2>useState</h2>
      <p>Returns a stateful value, and a function to update it.</p>
      <p>
        During the initial render, the returned state (state) is the same as the
        value passed as the first argument (initialState).
      </p>
      <p>
        The setState function is used to update the state. It accepts a new
        state value and enqueues a re-render of the component.
      </p>
      <h2>Example - 1</h2>
    </div>
  );
};

export default UseState;
