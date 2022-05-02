/**
 * @description 权限状态管理
 * @author Uni
 */

import { createSlice } from "@reduxjs/toolkit";

export const authSlicer = createSlice({
    name: 'auth',
    initialState: {
        value: false
    },
    reducers: {
        logIn: state => {
            state.value = true
        },
        logOut: state => {
            state.value = false
        }
    }
})

export const {
    logIn,
    logOut
} = authSlicer.actions

export default authSlicer.reducer