import React, { ReactElement, useEffect, useState } from "react";
import { getQueenAtkResult } from "~/service/crud.service.ts";

function Home(): ReactElement {
  const [data, setData] = useState<any | null>(null);
  useEffect(() => {
    const data = async () => {
      return await getQueenAtkResult();
    };
    console.log(data());
  }, []);
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center bg-slate-600">
        {/*<h1 className="text-white">Thanks For The Opportunity</h1>*/}
        {/*{data.map((d: any) => (*/}
        {/*  <div className="flex flex-col items-center justify-center bg-slate-600" key={d.id}>*/}
        {/*    <h1 className="text-white">{d}</h1>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </>
  );
}

export default Home;
