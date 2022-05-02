/**
 * @description 用户基本信息状态管理
 * @author Uni
 */

import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
    name: 'user',
    initialState: {
        value: {
            username: '',
            email: '',
            _id: '',
            status: '',
            areaX: '',
            areaY: ''
        }
        
    },
    reducers: {
        config: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {
    config
} = userSlicer.actions

export const selectUser = (state) => state.user?.value

export default userSlicer.reducer