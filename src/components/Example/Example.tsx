import React from "react";
interface IExample {
  children: JSX.Element[];
}
function Example({ children }: IExample) {
  return (
    <div className="px-5 sm:px-12">
      <div className="max-w-7xl mx-auto my-4 p-4 bg-gray-800">
        <div
          className="border-gray-100 shadow-inner rounded-sm -mx-5 sm:mx-auto sm:rounded-lg w-full h-full 
        flex flex-wrap"
        >
          <div className="w-full p-4 sm:w-1/2">{children[0]}</div>
          <div className="w-full p-6 sm:w-1/2">{children[1]}</div>
        </div>
      </div>
    </div>
  );
}

export default Example;
