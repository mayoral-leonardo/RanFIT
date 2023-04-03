import { configureStore } from '@reduxjs/toolkit'
import { auth } from './modules/auth/authReducer';

const store = configureStore({
  reducer: {
    auth: auth
  }
});

export default store;
