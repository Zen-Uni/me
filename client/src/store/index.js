/**
 * @description 项目 state 中心
 * @author Uni
 */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";

// 加载各层 state

export default configureStore({
    reducer: {
        auth: authReducer
    }
})