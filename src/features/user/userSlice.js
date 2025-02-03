import { createSlice } from "@reduxjs/toolkit";
import defaultImg from "../../assets/unknownPerson.jpg";

const initialState = {
  username: "",
  image: ``,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.username =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
        state.image = defaultImg
        localStorage.setItem("user", JSON.stringify(state));
    },
    updateUser(state, action) {
      state.username = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    updateUserImage(state, action) {
      state.image = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    removeUser(state){
      state.username = "";
      state.image = ``;
      localStorage.removeItem("user");
    },
    loadUserFromLocalStorage(state) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        state.username = user.username;
        state.image = user.image;
      }
    },
  },
});

export const getUsername = (state) => state.user.username;
export const getUserImage = (state) => state.user.image;

export const { createUser, updateUser, updateUserImage, removeUser, loadUserFromLocalStorage } = userSlice.actions;
export default userSlice.reducer;
