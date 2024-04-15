// src/features/invoices/invoicesSlice.ts

// Fetch Data from API: Define a thunk action to fetch invoices from the API

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const response = await axios.get("/invoices");
    return response.data;
  }
);

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllInvoices = (state) => state.invoices.invoices;

export default invoicesSlice.reducer;
