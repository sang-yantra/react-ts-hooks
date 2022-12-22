import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
type Props = {
  children?: JSX.Element;
};

export default function Drawer({ children }: Props) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content scroll-smooth scroll-p-10">
        <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
          <GiHamburgerMenu />
        </label>
        {children}
      </div>
      <div className="drawer-side scroll-smooth scroll-p-1">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <aside className="bg-base-200 w-80">
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li>
              <Link to="/hooks">HOOKS</Link>
            </li>
            <li className="menu-title">
              <span>Basic hooks</span>
            </li>
            <li>
              <Link to="/usestate">useState</Link>
            </li>
            <li>
              <Link to="useEffect">useEffect</Link>
            </li>
            <li>
              <Link to="useContext">useContext</Link>
            </li>
          </ul>
          <ul className="menu menu-compact flex flex-col p-0 px-4">
            <li></li>
            <li className="menu-title">
              <span>Additional hooks</span>
            </li>
            <li>
              <Link to="useReducer">useReducer</Link>
            </li>
            <li>
              <Link to="useCallback">useCallback</Link>
            </li>
            <li>
              <Link to="useMemo">useMemo</Link>
            </li>
            <li>
              <Link to="useRef">useRef</Link>
            </li>
            <li>
              <Link to="useImperativeHandle">useImperativeHandle</Link>
            </li>
            <li>
              <Link to="useDebugValue">useDebugValue</Link>
            </li>
            <li>
              <Link to="useDeferredValue">useDeferredValue</Link>
            </li>
            <li>
              <Link to="useTransition">useTransition</Link>
            </li>
            <li>
              <Link to="useId">useId</Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
