import http from "./httpService";
import { baseUrl } from "../config/config.json";

export const generate = async () => {
  const url = baseUrl + "/generate";
  try {
    return await http.get(url);
  } catch (ex) {
    return ex;
  }
};

export const getReport = async (filename) => {
  const url = `${baseUrl}/report/${filename}`;
  try {
    return await http.get(url);
  } catch (ex) {
    return ex;
  }
};
