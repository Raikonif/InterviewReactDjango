import React, { ReactElement, useState } from "react";

function Problem1(): ReactElement {
  const [response, setResponse] = useState<boolean>(false);
  const handleClick = () => {
    setResponse(!response);
  };
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-600">
        <form className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-white">PROBLEM 1 - Chess!</h1>
          <div className="flex">
            <textarea
              id="n"
              placeholder="Put Coordinate N (from 0 to 7)"
              className="mx-1 my-2 rounded p-1"
              required={true}
            />
            <textarea
              id="k"
              placeholder="Put Coordinate K (from 0 to 7)"
              className="mx-1 my-2 rounded p-1"
              required={true}
            />
          </div>
          <button onClick={handleClick} className="my-1 w-full rounded-full bg-green-600 p-2">
            <h3 className="text-white">Send your Inputs</h3>
          </button>
          <div className="flex flex-col items-center">
            <span className="mx-2 text-white">The Result is:</span>
            <pre className="font-bold text-white">{response ? "result" : "doesn't work"}</pre>
          </div>
        </form>
      </div>
    </>
  );
}

export default Problem1;
