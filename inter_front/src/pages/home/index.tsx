import React, { ReactElement, useEffect, useState } from "react";
import { getQueenAtkResult } from "~/service/crud.service.ts";
import { VITE_BASE_BACK_URL } from "~/constants/service.constants.ts";

function Home(): ReactElement {
  const [data, setData] = useState<any | null>(null);
  useEffect(() => {
    const data = async () => {
      return await getQueenAtkResult();
    };
    console.log(data());
    console.log("url", VITE_BASE_BACK_URL);
  }, []);
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-slate-600">
        <h1 className="text-white">Thanks For The Opportunity</h1>
      </div>
    </>
  );
}

export default Home;
