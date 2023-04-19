import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getDoctors = async () => {
    const response = await axios.get(`${base_url}doctor`);
    if (response.data) {
        return response.data;
    }
};

export const doctorService = {
    getDoctors,
}