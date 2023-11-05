import {createSlice} from '@reduxjs/toolkit';
import {UserState} from '../types';

const initialState: UserState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    UserSet(state, action) {
      state.user = action.payload;
    },
    UserSetToNull(state) {
      state.user = null;
    },
  },
});
export const {UserSet, UserSetToNull} = authSlice.actions;
export default authSlice.reducer;
