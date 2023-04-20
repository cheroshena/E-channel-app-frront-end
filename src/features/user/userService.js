import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

//User Register
const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData);
    if (response.data) {
        return response.data;
    }
};

//User Login
const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData);
    if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
        return response.data;
    }

};

//User Add to Product to Wishlist
const getUserWislist = async () => {
    const response = await axios.get(`${base_url}user/wishlist`, config);
    if (response.data) {
        return response.data;
    }
};

//User Add to Product to Cart
const addToCart=async(cartData)=>{
    const response = await axios.post(`${base_url}user/cart`,cartData, config);
    if (response.data) {
        return response.data;
    }
}

//User get own cart
const getCart=async()=>{
    const response = await axios.get(`${base_url}user/cart`, config);
    if (response.data) {
        return response.data;
    }
}

//User remove item own cart
const removeProductFromCart = async (cartItemId) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${cartItemId}`, config);
    if (response.data) {
        return response.data;
    }
}

//User remove item own cart
const updateProductFromCart = async (cartDetail) => {
    console.log(cartDetail);
    const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);
    if (response.data) {
        return response.data;
    }
}



export const authService = {
    register,
    login,
    getUserWislist,
    addToCart,
    getCart,
    removeProductFromCart,
    updateProductFromCart,
}