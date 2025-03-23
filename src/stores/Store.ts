import { configureStore } from '@reduxjs/toolkit';
import postReducer from './post_store/PostSlice';

export const Store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
