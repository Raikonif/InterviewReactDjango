import { service } from "~/service/index.ts";
import { VITE_BASE_BACK_URL } from "~/constants/service.constants.ts";

const getQueenAtkResult = async () => {
  const response = await service(`${VITE_BASE_BACK_URL}/api/all`);
  console.log(response.data);
  return response.data;
};

const postInputChessAttack = async () => {
  const response = await service("/api/items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export { getQueenAtkResult, postInputChessAttack };
