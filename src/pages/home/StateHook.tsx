import React from "react";
import HookCode from "./HookCode";
import HookTitle from "./HookTitle";
export interface IStateHook {}
const pClassName = "whitespace-pre-wrap my-4";

const exampleText = `
function ImageGallery {
    const [index, setIndex] = useState(0);
}`;

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
      <HookCode>
        <div>{exampleText}</div>
      </HookCode>
    </section>
  );
};

export default StateHook;
