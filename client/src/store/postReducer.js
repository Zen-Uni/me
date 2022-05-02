/**
 * @description 写信组件的状态控制
 * @author Uni
 */

import { createSlice } from "@reduxjs/toolkit";

export const MODE_TYPE = {
    self: "/post/self",
    pool: "/post/pool",
    friend: "/post/friend"
}


export const postSlicer = createSlice({
    name: 'post_status',
    initialState: {
        mode: MODE_TYPE.self
    },
    reducers: {
        updateMode: (state, action) => {
            state.mode = action.payload 
        }
    }
})

export const {
    updateMode
} = postSlicer.actions

export const selectPost = state => state.post?.mode

export default postSlicer.reducer