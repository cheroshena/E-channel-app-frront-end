import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doctorService } from "./doctorService";
import { toast } from "react-toastify";

//Get all Doctors
export const getAllDoctors = createAsyncThunk("doctor/get", async (thunkAPI) => {
    try {
        return await doctorService.getDoctors();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

//Get a Doctor
export const getADoctor = createAsyncThunk("doctor/getADoctor", async (id,thunkAPI) => {
    try {
        return await doctorService.getSingleDoctor(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
});

//add Rate
export const addRating = createAsyncThunk("doctor/rating", async (data, thunkAPI) => {
    try {
        return await doctorService.rateDoctor(data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});


const doctorState = {
    doctor: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}


export const doctorSlice = createSlice({
    name: "doctor",
    initialState: doctorState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllDoctors.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllDoctors.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.doctor = action.payload;

            })
            .addCase(getAllDoctors.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(getADoctor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getADoctor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.singledoctor = action.payload;
                state.message="Doctor Fetched Successfully!"

            })
            .addCase(getADoctor.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
            .addCase(addRating.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addRating.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.rating = action.payload;
                state.message = "Rating Added Successfully!";
                if(state.isSuccess){
                    toast.success("Rating Added Successfully!")
                }
            })
            .addCase(addRating.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default doctorSlice.reducer;
