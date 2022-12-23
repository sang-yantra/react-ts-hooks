import HookTitle from "./HookTitle";
import { pClassName } from "../../../src/constants/css-classses";
import CodeEditor from "./CodeEditor";
interface IContextHook {}

const exampleText = `     const theme = <span class="sp-syntax-keyword">useContext</span>(ThemeContext);
    <em class="sp-syntax-comments">/// something...</em>
`;

const ContextHook: React.FC<IContextHook> = () => {
  return (
    <section>
      <HookTitle id="context-hook">Context Hook</HookTitle>
      <p className={pClassName}>
        Context lets a component receive information from distant parents
        without passing it as props. For example, your app’s top-level component
        can pass the current UI theme to all components below, no matter how
        deep.
      </p>
      <ul className="ml-6 my-3 list-disc">
        <li className="leading-relaxed mb-1">
          useContext reads and subscribes to a context.
        </li>
      </ul>
      <CodeEditor functionName="ImageComponent" functionBody={exampleText} />
      <hr className="my-6 block border-b border-primary-content"></hr>
    </section>
  );
};

export default ContextHook;
