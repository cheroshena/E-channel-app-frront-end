import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

//Register user
export const registerUser = createAsyncThunk("auth/register", async (userData, thunkAPI) => {
    try {
        return await authService.register(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

//Login user
export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
        return await authService.login(userData)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

//Get User his own wishlist
export const getUserProductWishlist = createAsyncThunk("user/wishlist", async (thunkAPI) => {
    try {
        return await authService.getUserWislist();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Get User Product add to cart
export const addProdToCart = createAsyncThunk("user/cart/add", async (cartData, thunkAPI) => {
    try {
        return await authService.addToCart(cartData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Get User cart
export const getUserCart = createAsyncThunk("user/cart/get", async (thunkAPI) => {
    try {
        return await authService.getCart();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Delete User cart
export const deleteCartProduct = createAsyncThunk("user/cart/product/delete", async (cartItemId, thunkAPI) => {
    try {
        return await authService.removeProductFromCart(cartItemId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Update User cart quantity
export const updateCartProduct = createAsyncThunk("user/cart/product/update", async (cartDetail, thunkAPI) => {
    try {
        return await authService.updateProductFromCart(cartDetail);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Get User Product add to cart
export const addProdToSelectdoc = createAsyncThunk("user/selectdoc/add", async (selectdocData, thunkAPI) => {
    try {
        return await authService.addToSelectdoc(selectdocData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Get User Product add to cart
export const getUserSelectdoc = createAsyncThunk("user/selectdoc/get", async (thunkAPI) => {
    try {
        return await authService.getSelectdoc();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Delete User Select doctor
export const deleteSelectdocDoctor = createAsyncThunk("user/selectdoc/doctor/delete", async (selectdocItemId, thunkAPI) => {
    try {
        return await authService.removeDoctorFromSelectdoc(selectdocItemId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Create An order
export const createAnOrder = createAsyncThunk("user/cart/create-order", async (orderDetail, thunkAPI) => {
    try {
        return await authService.createOrder(orderDetail);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Create An channel
export const createAChannel = createAsyncThunk("user/selectdoc/create-channel", async (orderDetail, thunkAPI) => {
    try {
        return await authService.createChannel(orderDetail)
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Get User Orders
export const getOrders = createAsyncThunk("user/order/get", async (thunkAPI) => {
    try {
        return await authService.getUserOrders();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Get User channels
export const getChannels = createAsyncThunk("user/channel/get", async (thunkAPI) => {
    try {
        return await authService.getUserChannels();
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Update User Profile
export const updateProfile = createAsyncThunk("user/profile/update", async (data, thunkAPI) => {
    try {
        return await authService.UpdateUser(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//Forgotpassword
export const forgotPasswordToken = createAsyncThunk("user/password/token", async (data, thunkAPI) => {
    try {
        return await authService.forgotPassToken(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

//resetpassword
export const resetPassword = createAsyncThunk("user/password/reset", async (data, thunkAPI) => {
    try {
        return await authService.resetPass(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});


const getCustomerfromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;


const initialState = {
    user: getCustomerfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.createdUser = action.payload;
                if (state.isSuccess === true) {
                    toast.info("User Created Successfully!");
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error);
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;

                if (state.isSuccess === true) {
                    localStorage.setItem("token", action.payload.token);
                    toast.info("You are Logging Successfully !");
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isError === true) {
                    toast.error(action.error);
                }
            })
            .addCase(getUserProductWishlist.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserProductWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.wishlist = action.payload;
            })
            .addCase(getUserProductWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addProdToCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addProdToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.cartProduct = action.payload;
                if (state.isSuccess) {
                    toast.success("Your Product add to Cart !")
                }
            })
            .addCase(addProdToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getUserCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.cartProducts = action.payload;

            })
            .addCase(getUserCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteCartProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteCartProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedCartProduct = action.payload;
                if (state.isSuccess) {
                    toast.success("Delete a Product From Cart!")
                }

            })
            .addCase(deleteCartProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
            })
            .addCase(updateCartProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateCartProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedCartProduct = action.payload;
                if (state.isSuccess) {
                    toast.success("Updated Quantity")
                }

            })
            .addCase(updateCartProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
            })
            .addCase(addProdToSelectdoc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addProdToSelectdoc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.selectDoctor = action.payload;
                if (state.isSuccess) {
                    toast.success("Your Doctor add to Channel !")
                }
            })
            .addCase(addProdToSelectdoc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getUserSelectdoc.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserSelectdoc.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.selectdocDoctors = action.payload;

            })
            .addCase(getUserSelectdoc.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(deleteSelectdocDoctor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteSelectdocDoctor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.deletedSelectdocDoctor = action.payload;
                if (state.isSuccess) {
                    toast.success("Delete a Doctor From Booking!")
                }

            })
            .addCase(deleteSelectdocDoctor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
            })
            .addCase(createAnOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createAnOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.orderedProduct = action.payload;
                if (state.isSuccess) {
                    toast.success("Ordered Successfully Done !")
                }

            })
            .addCase(createAnOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
            })
            .addCase(createAChannel.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createAChannel.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.orderedDoctor = action.payload;
                if (state.isSuccess) {
                    toast.success("Channel Successfully Done !")
                }

            })
            .addCase(createAChannel.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
            })
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.getorderedProduct = action.payload;
                

            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                
            })
            .addCase(getChannels.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getChannels.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.getchanneledDoctor = action.payload;
                

            })
            .addCase(getChannels.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                
            })
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.updatedUser = action.payload;
                if (state.isSuccess) {
                    toast.success("Profile Updated Successfully Done !")
                }
                

            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
                
            })
            .addCase(forgotPasswordToken.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPasswordToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.token = action.payload;
                if (state.isSuccess) {
                    toast.success("Email sent Successfully Done !")
                }
                

            })
            .addCase(forgotPasswordToken.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
                
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.pass = action.payload;
                if (state.isSuccess) {
                    toast.success("Password Updated Successfully Done !")
                }
                

            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if (state.isSuccess === false) {
                    toast.error("Something Went Wrong!")
                }
                
            });
    },
});


export default authSlice.reducer;
