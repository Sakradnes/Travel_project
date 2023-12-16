import { createSlice } from '@reduxjs/toolkit';
import { State } from './type/typestravel';

const initialState: State = {
  locationslist: [],
  isLocation: 0,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    currentLoc: (state, action) => {
      state.isLocation = action.payload;
    },
  },
});

export const { currentLoc } = locationSlice.actions;

export default locationSlice.reducer;
