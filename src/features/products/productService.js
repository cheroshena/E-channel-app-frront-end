import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

//get all Products
const getProducts = async () => {
    const response = await axios.get(`${base_url}product`);
    if (response.data) {
        return response.data;
    }
};

//add to wishlist
const addToWishlist = async (prodId) => {
    const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config);
    if (response.data) {
        return response.data;
    }
};

//get single product page
const getSingleProduct = async (id) => {
    const response = await axios.get(`${base_url}product/${id}`);
    if (response.data) {
        return response.data;
    }
};


export const productService = {
    getProducts,
    addToWishlist,
    getSingleProduct,
}