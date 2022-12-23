import React from "react";
import CodeEditor from "./CodeEditor";
import HookTitle from "./HookTitle";
export interface IStateHook {}
const pClassName = "whitespace-pre-wrap my-4";

const exampleText = `     const [index, setIndex] = <span class="sp-syntax-keyword">useState</span>(0);
    <em class="sp-syntax-comments">/// something...</em>
`;

const StateHook: React.FC<IStateHook> = () => {
  return (
    <section>
      <HookTitle id="state-hook">State Hook</HookTitle>
      <p className={pClassName}>
        State lets a component “remember” information like user input. For
        example, a form component can use state to store the input value, while
        an image gallery component can use state to store the selected image
        index.
      </p>
      <p className={pClassName}>
        To add state to a component, use one of these Hooks:
      </p>
      <ul className="ml-6 my-3 list-disc">
        <li className="leading-relaxed mb-1">
          useState declares a state variable that you can update directly.
        </li>
        <li className="leading-relaxed mb-1">
          useReducer declares a state variable with the update logic inside a
          reducer function.
        </li>
      </ul>
      <CodeEditor functionName="ImageComponent" functionBody={exampleText} />
      <hr className="my-6 block border-b border-primary-content"></hr>
    </section>
  );
};

export default StateHook;
