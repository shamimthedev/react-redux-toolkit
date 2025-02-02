import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice'
import postReducer from '../features/posts/postSlice'
import usersReducer from '../features/users/userSlice'

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        posts : postReducer,
        users: usersReducer
    }
})