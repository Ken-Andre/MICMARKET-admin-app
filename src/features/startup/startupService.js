import axios from "axios";
import { base_url } from "../../utils/base_url";

const getStartups = async () => {
  const response = await axios.get(`${base_url}startup/`);

  return response.data;
};

const startupService = {
  getStartups,
};
export default startupService;
