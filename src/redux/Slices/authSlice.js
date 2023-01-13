import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from '../../axios'
import Cookies from 'js-cookie'



export const login = createAsyncThunk('/login', async (userObj) => {
    try {
        const { username, password } = userObj
        const { data } = await instance.post('/api/login', {
            username,
            password
        })
        return data
    } catch (err) {
        return err.response.data
    }
});
export const logout = createAsyncThunk('/logout', async () => {
    window.localStorage.clear();
    try {
        await instance.post('/api/logout')

    } catch (err) {
        return err.response.data
    }
});

export const verifyPin = createAsyncThunk('/verify-pin', async (pin, { getState }) => {
    try {
        const state = getState()
        const token = state.auth?.token
        const { data } = await instance.post('/api/verify-pin', { pin }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data
    } catch (err) {
        return err.response.data
    }
})









const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') ? JSON.parse(localStorage.getItem('isAuthenticated')) : false,
    error: null,
    pinVerified: false,
    loading: false,
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
}



const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        resetAuthError: (state) => {
            state.error = null
        },

    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.loading = false
            state.isAuthenticated = action.payload?.isAuthenticated || false
            state.user = action.payload?.user || null
            state.error = action?.payload?.error
            state.token = action.payload?.token || null

            localStorage.setItem('user', JSON.stringify(state.user))
            localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated))
            localStorage.setItem('token', JSON.stringify(state.token))
        },
        [login.pending]: (state, action) => {
            state.loading = true
        },
        [login.rejected]: (state, action) => {
            state.loading = false
        },
        [verifyPin.fulfilled]: (state, action) => {

            state.pinVerified = action.payload?.success
            state.loading = false
            state.error = action?.payload?.error
        },
        [verifyPin.rejected]: (state, action) => {
            state.error = action.payload?.message
            state.loading = false
        },
        [verifyPin.pending]: (state, action) => {
            state.loading = true
        }


    }

})

export const { resetAuthError } = authSlice.actions
export default authSlice.reducer


