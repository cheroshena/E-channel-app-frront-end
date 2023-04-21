import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

// get all Doctors
const getDoctors = async () => {
    const response = await axios.get(`${base_url}doctor`);
    if (response.data) {
        return response.data;
    }
};

//get a Doctor
const getSingleDoctor = async (id) => {
    const response = await axios.get(`${base_url}doctor/${id}`);
    if (response.data) {
        return response.data;
    }
};

export const doctorService = {
    getDoctors,
    getSingleDoctor,
}