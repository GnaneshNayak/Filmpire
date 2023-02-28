import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: '',
};

const authLSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem('session_id');
      localStorage.setItem('account_id', action.payload.id);
    },
  },
});

export const { setUser } = authLSlice.actions;
export default authLSlice.reducer;

export const userSelector = (state) => state.user;
