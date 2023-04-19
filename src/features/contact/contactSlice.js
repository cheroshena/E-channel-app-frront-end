import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";


//get all Products
export const createQuery = createAsyncThunk("contact/post", async (contactData,thunkAPI) => {
    console.log(contactData);
    try {
        return await contactService.postQuery(contactData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});


const contactState = {
    contact: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const contactSlice = createSlice({
    name: "contact",
    initialState: contactState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createQuery.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.contact = action.payload;
                if(state.isSuccess===true){
                    toast.success("Submitted!")
                }

            })
            .addCase(createQuery.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
                if(state.isError===true){
                    toast.success("Something Wrong!")
                }
            });
    },
});


export default contactSlice.reducer;