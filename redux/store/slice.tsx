import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePage: false,
  isSidebarOpen: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfilePage: (state, action) => {
      state.profilePage = action.payload;
    },
    setIsSidebarOpen : (state, action) => {
      state.isSidebarOpen= action.payload;
    },
    toggleProfilePage: (state) => {
      state.profilePage = !state.profilePage;
    },
  },
});

export const { setProfilePage,toggleProfilePage,setIsSidebarOpen } = profileSlice.actions;
export default profileSlice.reducer;
