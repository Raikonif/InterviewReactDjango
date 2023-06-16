import { service } from "~/service/index.ts";
import axios from "axios";

const getQueenAtkResult = async () => {
  const response = await axios.get("http://localhost:8000/api/all");
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
