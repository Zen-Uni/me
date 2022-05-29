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
            areaY: '',
            avatar_url: ''
        }
        
    },
    reducers: {
        config: (state, action) => {
            state.value = action.payload
        },
        updateAvatar: (state, action) => {
           state.value.avatar_url = action.payload
        }
    }
})

export const {
    config,
    updateAvatar
} = userSlicer.actions

export const selectUser = (state) => state.user?.value
// export const selectUserAvatar = state => state.user?.value?.avatar_url

export default userSlicer.reducer