import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  CodeEditorWrapper,
  Comment,
  Definition,
  Line,
  LineKeyword,
} from "../../components/CodeEditor/CodeEditor";
import Example from "../../components/Example/Example";
import UserStateExample1 from "./examples/UseStateEx1";
import exampleStr from "./examples/UseStateEx1Str";
export interface IUseState {
  children?: React.ReactNode;
}

function UseState() {
  return (
    <>
      <UseStateIntro />
      <Example>
        <CodeEditorWrapper>{exampleStr}</CodeEditorWrapper>
        <UserStateExample1 />
      </Example>
    </>
  );
}

function UseStateIntro({ children }: IUseState): JSX.Element {
  return (
    <main className="break-words">
      <div className="pl-0"></div>
      <div className="px-5 sm:px-12 pt-8 sm:pt-7 lg:pt-5">
        <div className="max-w-4xl ml-0 2xl:ml-auto">
          <div className="flex items-center text-sm text-info font-bold uppercase">
            <Link to="/hooks" className=" tracking-wide mr-1 hover:underline">
              API Reference
            </Link>
            <FaAngleRight className="text-sm" />
            <Link to="/hooks" className=" tracking-wide mr-1 hover:underline">
              React:Hooks
            </Link>
            <FaAngleRight className="text-sm" />
          </div>
        </div>
        <h1 className=" text-5xl font-bold leading-tight text-primary break-words">
          useState
        </h1>
      </div>
      <div className="px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl ml-0 2xl:mx-auto">
            <div className="text-xl leading-relaxed">
              <p className=" whitespace-pre-wrap">
                <em>useState</em> is a React Hook that lets you add a state
                variable to your component.
              </p>
            </div>
            <CodeEditorWrapper>
              <Line>
                <LineKeyword>const</LineKeyword>
                {"  "}
                <Definition>[state, setState]</Definition> ={" "}
                <LineKeyword>useState</LineKeyword>
                (intialState)
              </Line>
              <Line>
                <Comment>
                  /// type of state is inferred from the initialState
                </Comment>
              </Line>
              {`    Ex - const [state, setState] = useState({foo: 1,bar: 2,});`}
              <Line>
                <Comment>///type {`{foo: 1, bar:2}`}</Comment>
              </Line>
            </CodeEditorWrapper>
            <hr className="my-6 block border-b border-primary-content"></hr>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

export default UseState;
