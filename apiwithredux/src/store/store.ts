import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from '../features/apiSlice';

const store = configureStore({
  reducer: {
    userData: sliceReducer,
  },
});

export default store;