import HookTitle from "./HookTitle";
import { pClassName } from "../../../src/constants/css-classses";
import CodeEditor from "./CodeEditor";
interface IRefHook {}

const exampleText = `     const inputRef = <span class="sp-syntax-keyword">useRef</span>(null);
    <em class="sp-syntax-comments">/// something...</em>
`;

const RefHook: React.FC<IRefHook> = () => {
  return (
    <section>
      <HookTitle id="ref-hook">Ref Hook</HookTitle>
      <p className={pClassName}>
        Refs let a component hold some information that isn’t used for
        rendering, like a DOM node or a timeout ID. Unlike with state, updating
        a ref does not re-render your component. Refs are an “escape hatch” from
        the React paradigm. They are useful when you need to work with non-React
        systems, such as the built-in browser APIs.
      </p>
      <ul className="ml-6 my-3 list-disc">
        <li className="leading-relaxed mb-1">
          useRef declares a ref. You can hold any value in it, but most often
          it’s used to hold a DOM node.
        </li>
        <li className="leading-relaxed mb-1">
          useImperativeHandle lets you customize the ref exposed by your
          component. This is rarely used.
        </li>
      </ul>
      <CodeEditor functionName="ImageComponent" functionBody={exampleText} />
      <hr className="my-6 block border-b border-primary-content"></hr>
    </section>
  );
};

export default RefHook;
