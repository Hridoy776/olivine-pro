import { configureStore } from "@reduxjs/toolkit";
import { foodApi } from "./slices/api/apiSlice";
import authSlice from "./slices/auth/authSlice";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    authSlice: authSlice,
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
