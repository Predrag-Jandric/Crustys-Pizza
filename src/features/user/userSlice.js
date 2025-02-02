import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzTWQoCUbRNdiyorem5Qp1zYYhpliR9q0Bw&s",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.username =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
    },
    updateUser(state, action) {
      state.username = action.payload;
    },
    updateUserImage(state, action) {
      state.image = action.payload;
    },
  },
});

export const getUsername = (state) => state.user.username;
export const getUserImage = (state) => state.user.image;

export const { createUser, updateUser, updateUserImage } = userSlice.actions;
export default userSlice.reducer;
