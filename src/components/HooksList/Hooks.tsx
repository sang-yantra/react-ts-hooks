import React from "react";
import { Link } from "react-router-dom";
export default function Hooks() {
  return (
    <div>
      <ul className=" list-disc">
        <li>
          <Link to="/">Basic Hooks</Link>
        </li>
        <ul>
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
      </ul>
      <ul>
        <li>
          <Link to="/">Additional Hooks</Link>
        </li>
        <ul>
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
      </ul>
      <ul>
        <li>
          <Link to="/">Library Hooks</Link>
        </li>
        <ul>
          <li>
            <Link to="/">useSyncExternalStore</Link>
          </li>
          <li>
            <Link to="/">useInsertionEffect</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}
