import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import StateHook from "./StateHook";
import ContextHook from "./ContextHook";
import RefHook from "./RefHook";
import EffectHooks from "./EffectHooks";
import PerformanceHooks from "./PerformanceHooks";
export interface IHomeProps {}

const Hooks: React.FC<IHomeProps> = () => {
  return (
    <main className="min-w-0">
      <div className="lg:hidden h-16 mb-2"></div>
      <HooksConatiner>
        <StateHook />
        <ContextHook />
        <RefHook />
        <EffectHooks />
        <PerformanceHooks />
      </HooksConatiner>
    </main>
  );
};

interface HooksIntro {
  children?: React.ReactNode;
}
const HooksConatiner = ({ children }: HooksIntro) => {
  return (
    <article className="break-words">
      <div className="pl-0"></div>
      <div className="px-5 sm:px-12 pt-8 sm:pt-7 lg:pt-5">
        <div className="max-w-4xl ml-0 2xl:ml-auto">
          <div className="flex items-center">
            <a className="text-sm text-info tracking-wide font-bold uppercase mr-1 hover:underline">
              API Reference
            </a>
            <FaAngleRight className="text-sm" />
          </div>
        </div>
        <h1 className=" text-5xl font-bold leading-tight text-primary break-words">
          react: Hooks
        </h1>
      </div>
      <div className="px-5 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl ml-0 2xl:mx-auto">
            <div className="text-xl leading-relaxed">
              <p className=" whitespace-pre-wrap">
                <em>Hooks</em> let you use different React features from your
                components. You can either use the built-in Hooks or combine
                them to build your own. This page lists all the built-in Hooks
                in React.
              </p>
            </div>
            <ul className="ml-6 my-3 list-disc">
              <li className="leading-relaxed mb-1 text-info">
                <Link to="/hooks" className="hover:underline">
                  State Hooks
                </Link>
              </li>
              <li className="leading-relaxed mb-1 text-info">
                <Link to="/hooks" className="hover:underline">
                  Context Hooks
                </Link>
              </li>
              <li className="leading-relaxed mb-1 text-info">
                <Link to="/hooks" className="hover:underline">
                  Ref Hooks
                </Link>
              </li>
              <li className="leading-relaxed mb-1 text-info">
                <Link to="/hooks" className="hover:underline">
                  Effect Hooks
                </Link>
              </li>
              <li className="leading-relaxed mb-1 text-info">
                <Link to="/hooks" className="hover:underline">
                  Performance Hooks
                </Link>
              </li>
              <li className="leading-relaxed mb-1 text-info hover:underline">
                <Link to="/hooks" className="hover:underline">
                  Other Hooks
                </Link>
              </li>
            </ul>
            <hr className="my-6 block border-b border-primary-content"></hr>
            {children}
          </div>
        </div>
      </div>
    </article>
  );
};
export default Hooks;
