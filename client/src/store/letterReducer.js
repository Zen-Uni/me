/**
 * @description 信件状态管理
 * @author Uni
 */

import { createSlice } from "@reduxjs/toolkit";

export const letterSlicer = createSlice({
    name: 'letter_write',
    initialState: {
        title: new Date().toLocaleDateString(),
        context: "",
        sendTo: ""
    },
    reducers: {
        updateTitle: (state, action) => {
            const title = action.payload.trim()
            if (title === "") {
                state.title = new Date().toLocaleDateString()
            } else {
                state.title = title
            }
            
        },
        updateContext: (state, action) => {
            state.context = action.payload
        },
        updateSendTo: (state, action) => {
            state.sendTo = action.payload
        }
    }
})


export const {
    updateTitle,
    updateContext,
    updateSendTo
} = letterSlicer.actions

export const selectWriteTittle = state => state.write?.title
export const selectWriteContext = state => state.write?.context
export const selectWriteSendTo = state => state.write?.sendTo

export default letterSlicer.reducer
