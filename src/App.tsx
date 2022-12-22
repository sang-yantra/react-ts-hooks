import { useState } from "react";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Drawer from "./components/Drawer/Drawer";
import Hooks from "./components/HooksList/Hooks";
import UseState from "./components/UseState/UseState";

export interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Drawer>
        <section className="">
          <Outlet />
        </section>
      </Drawer>
    </div>
  );
};

export default App;
