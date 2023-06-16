import React, { ReactElement, useState } from "react";

function Problem2(): ReactElement {
  const [response, setResponse] = useState<boolean>(false);
  const handleClick = () => {
    setResponse(!response);
  };
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-slate-600">
          <h1 className="p-1 font-bold text-white">PROBLEM 2 - String Value!</h1>
          <textarea
            placeholder="Put your Input to get the String Value"
            className="m-1 w-full rounded p-1"
            required={true}
          />
          <button onClick={handleClick} className="my-1 w-full rounded-full bg-green-600 p-2">
            <h3 className="text-white">Send your Input</h3>
          </button>
          <div className="flex flex-col items-center">
            <span className="mx-2 text-white">The Result is:</span>
            <pre className="font-bold text-white">{response ? "Result" : "?"}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Problem2;
