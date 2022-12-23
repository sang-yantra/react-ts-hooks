import HookTitle from "./HookTitle";
import { pClassName } from "../../../src/constants/css-classses";
import CodeEditor from "../../components/CodeEditor/CodeEditor";
interface IRefHook {}

const exampleText = `
    <span class="sp-syntax-keyword">useEffect</span>(() => {
        const connection = <span class="sp-syntax-keyword">createConnection</span>(roomId);
        connection.connect();
        return () => connection.<span class="sp-syntax-keyword">disconnect</span>();
    }, [roomId]);
    <em class="sp-syntax-comments">/// something...</em>
`;

const EffectHooks: React.FC<IRefHook> = () => {
  return (
    <section>
      <HookTitle id="effect-hook">Effect Hooks</HookTitle>
      <p className={pClassName}>
        Effects let a component connect to and synchronize with external
        systems. This includes dealing with network, browser DOM, animations,
        widgets written using a different UI library, and in general any
        non-React code.
      </p>
      <ul className="ml-6 my-3 list-disc">
        <li className="leading-relaxed mb-1">
          useEffect connects a component to an external system.
        </li>
      </ul>
      <CodeEditor
        functionName="ChatRoom"
        functionParams="roomId"
        functionBody={exampleText}
      />
      <p>
        Effects are an “escape hatch” from the React paradigm. Don’t use Effects
        to orchestrate the data flow of your application. If you’re not
        interacting with an external system, you might not need an Effect.
      </p>
      <p>There are two variations of useEffect with differences in timing:</p>
      <ul className="ml-6 my-3 list-disc">
        <li className="leading-relaxed mb-1">
          useLayoutEffect fires before the browser repaints the screen. You can
          measure layout here.
        </li>
        <li className="leading-relaxed mb-1">
          useInsertionEffect fires before React makes changes to the DOM.
          Libraries can insert dynamic CSS here.
        </li>
      </ul>
      They are rarely used.
      <hr className="my-6 block border-b border-primary-content"></hr>
    </section>
  );
};

export default EffectHooks;
