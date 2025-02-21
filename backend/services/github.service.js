import axios from "axios";
import { ENV_VARS } from "../config/envVar.js";

export const fetchFromTMDB = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + ENV_VARS.GITHUB_TOKEN,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error(`Error fetching data from Github: ${response.statusText}`);
  }

  return response.data;
};
