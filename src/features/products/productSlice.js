import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { productService } from "./productService";


//get all Products
export const getAllProducts = createAsyncThunk("product/get", async (thunkAPI) => {
    try {
        return await productService.getProducts();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

//add to wishlist
export const addToWishlist = createAsyncThunk("product/wishlist", async (prodId, thunkAPI) => {
    try {
        return await productService.addToWishlist(prodId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

const productState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const productSlice = createSlice({
    name: "product",
    initialState: productState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.product = action.payload;

            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addToWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.addToWishlist = action.payload;
                if(state.isSuccess===true){
                    toast.success("Product add to wishlist !")
                }
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});


export default productSlice.reducer;
