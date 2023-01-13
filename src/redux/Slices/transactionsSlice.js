import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import instance from '../../axios';


export const getMyTransactions = createAsyncThunk('/getTransactions', async ({page = 1, limit = 6}, {getState}) => {
    try {
        const state = getState()
        const token = state.auth?.token
        const { data } = await instance.get(`/api/transactions/?page=${page}&limit=${limit}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data
    } catch (err) {
        return err.response.data
    }
});







const initialState = {
    loading: true,
    error: null,
    transactions: [],
    totalPages: null,
    totalDocs: null,
    page: null,
    limit: null,
    hasNextPage: null,
    hasPrevPage: null

    
  
}

const transactionsSlice = createSlice({
    name: 'transactionsSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: {
        [getMyTransactions.fulfilled]: (state, action) => {
            state.transactions = action?.payload?.transactions
            state.totalPages = action?.payload?.totalPages
            state.totalDocs = action?.payload?.totalDocs
            state.page = action?.payload?.page
            state.limit = action?.payload?.limit
            state.hasNextPage = action?.payload?.hasNextPage
            state.hasPrevPage = action?.payload?.hasPrevPage

            state.loading = false
        },
        [getMyTransactions.pending]: (state, action) => {
            state.loading = true
        },
        [getMyTransactions.rejected]: (state, action) => {
            state.loading = false
        },

    }

})

export default transactionsSlice.reducer


