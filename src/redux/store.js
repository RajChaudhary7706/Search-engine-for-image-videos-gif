import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';
import collectionReducer from '../redux/features/collectionSlice.js';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    collection:collectionReducer,
  },
});