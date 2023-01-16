import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from '../../features/counter/counterSlice';
import user from './../user/reducer/user.reducer'
//store 이지만 index
const rootReducer = combineReducers({ user });

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger]
  // {
  //   counter: counterReducer,
  // },
});
