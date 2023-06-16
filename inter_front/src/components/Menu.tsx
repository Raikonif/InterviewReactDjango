import React, { ReactElement } from "react";
import generalConstants from "~/constants/generalData.constatnts.ts";
import { NavLink } from "react-router-dom";

function Menu(): ReactElement {
  const activeStyle = "flex items-center h-20 bg-green-300 pl-3";
  return (
    <div className="h-full w-full rounded-r-lg bg-green-500">
      <ul className="flex flex-col justify-center pb-2">
        {generalConstants.menu.map((item) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={({ isActive }): string =>
              isActive
                ? activeStyle
                : "flex h-20 w-full items-center bg-green-500 pl-3 hover:bg-green-400"
            }
          >
            <li className="text-white">{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
