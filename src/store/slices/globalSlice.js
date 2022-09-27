import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchModal: false,
  notifications: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSearchModal: (state, action) => {
      state.searchModal = action.payload;
    },
  },
});

export const { setSearchModal } = globalSlice.actions;
export const selectSearchModalState = (state) => state.global.searchModal;

export default globalSlice.reducer;
