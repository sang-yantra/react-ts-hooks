import HookTitle from "./HookTitle";
import { pClassName } from "../../../src/constants/css-classses";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
interface IPerformanceHooks {}

const exampleText = `
    const visibleTodos = <span class="sp-syntax-keyword">useMemo</span>(() => filterTodos(todos, tab), [todos, tab]);
    <em class="sp-syntax-comments">/// something...</em>
`;

const PerformanceHooks: React.FC<IPerformanceHooks> = () => {
  return (
    <section>
      <HookTitle id="performance-hook">Performance Hooks</HookTitle>
      <p className={pClassName}>
        A common way to optimize re-rendering performance is to skip unnecessary
        work. For example, you can tell React to reuse a cached calculation or
        to skip a re-render if the data has not changed since the previous
        render.
      </p>
      <p>
        To skip calculations and unnecessary re-rendering, use one of these
        Hooks:
      </p>
      <ul className="ml-6 my-3 list-disc">
        <li className="leading-relaxed mb-1">
          useMemo lets you cache the result of an expensive calculation.
        </li>
        <li className="leading-relaxed mb-1">
          useCallback lets you cache a function definition before passing it
          down to an optimized component.
        </li>
      </ul>
      <CodeEditor
        functionName="TodoList"
        functionParams="todos, tab, theme"
        functionBody={exampleText}
      ></CodeEditor>
      <hr className="my-6 block border-b border-primary-content"></hr>
    </section>
  );
};

export default PerformanceHooks;
