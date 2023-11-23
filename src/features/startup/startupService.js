import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getStartups = async () => {
  const response = await axios.get(`${base_url}startup/`);

  return response.data;
};

const createStartup = async (startup) => {
  const response = await axios.post(`${base_url}startup/`, startup, config);

  return response.data;
};

const startupService = {
  getStartups,
  createStartup,
};
export default startupService;
