/**
 * @description 读信，类型信件集合
 * @author Uni
 */

import { createSlice } from "@reduxjs/toolkit";

export const readSlicer = createSlice({
    name: 'letter_read',
    initialState: {
        list: [],
        current: {
            title: '',
            context: '',
            owner: '',
            avatar_url: '',
            areaX: '',
            areaY: ''
        }
    },
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        },
        setCurrent: (state) => {
            const len = state.list.length;
            const index = Math.floor(Math.random() * len);
            const data = state.list[index];
            state.list.splice(index, 1);
            const { context, title, owner } = data;
            const res = {
                context,
                title,
                owner: owner._id,
                avatar_url: owner.avatar_url,
                areaX: owner.areaX,
                areaY: owner.areaY
            }
            state.current = res;
        }
    }
});

export const {
    setList,
    setCurrent
} = readSlicer.actions;

export const selectCurrentLetter = state => state?.read?.current;

export default readSlicer.reducer;