/**
 * @description 项目 state 中心
 * @author Uni
 */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import letterReducer from "./letterReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

// 加载各层 state

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        post: postReducer,
        write: letterReducer
    }
})